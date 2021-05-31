# Generated by Django 3.1.7 on 2021-04-26 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper_api', '0002_pagerequest_code'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pagerequest',
            old_name='json',
            new_name='original_request',
        ),
        migrations.AddField(
            model_name='pagerequest',
            name='request_result',
            field=models.JSONField(default=None),
        ),
        migrations.AddField(
            model_name='scrapedpage',
            name='child_pages',
            field=models.ManyToManyField(related_name='_scrapedpage_child_pages_+', to='scraper_api.ScrapedPage'),
        ),
    ]