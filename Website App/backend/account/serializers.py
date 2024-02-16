from rest_framework import serializers
from .models import UserData, UserDetails

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    is_buyer = serializers.BooleanField(required=True)
    is_seller = serializers.BooleanField(required=True)

    class Meta:
        model = UserData
        fields = ('id', 'email', 'username', 'password', 'first_name', 'last_name', 'is_buyer', 'is_seller', 'address', 'phone_number')

    def validate(self, data):
        is_buyer = data.get('is_buyer')
        is_seller = data.get('is_seller')
        
        if is_buyer and is_seller:
            raise serializers.ValidationError("A user cannot be both a buyer and a seller simultaneously.")
        
        if is_buyer:
            # If the user is a buyer, set is_seller to False
            data['is_seller'] = False
        
        return data

    def create(self, validated_data):
        is_buyer = validated_data.pop('is_buyer', False)
        is_seller = validated_data.pop('is_seller', False)

        user = UserData.objects.create_user(**validated_data, is_buyer=is_buyer, is_seller=is_seller)
        return user


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ("id","is_buyer","is_seller","user_id")
        
class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'

class AdminUserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserData
        fields = '__all__'

    def create(self, validated_data):
        user = UserData.objects.create_user(**validated_data)
        return user