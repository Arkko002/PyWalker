# Generated by Django 3.1.7 on 2021-04-09 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pagerequest',
            name='code',
            field=models.IntegerField(default=0),
        ),
    ]
