# Generated by Django 3.2.23 on 2024-02-13 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_auto_20240213_0403'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='is_buyer',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userdetails',
            name='is_seller',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='userdetails',
            name='password_reset_token_expire',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
