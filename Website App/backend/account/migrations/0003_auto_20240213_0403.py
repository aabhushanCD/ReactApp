# Generated by Django 3.2.23 on 2024-02-13 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_userdetails_password_reset_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='password_reset_token_expire',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='userdetails',
            name='password_reset_token_generated_time',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
