# Generated by Django 3.2.23 on 2024-02-13 06:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_auto_20240213_0634'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdetails',
            name='buyer',
        ),
        migrations.RemoveField(
            model_name='userdetails',
            name='seller',
        ),
    ]
