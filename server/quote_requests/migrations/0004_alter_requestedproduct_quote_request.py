# Generated by Django 3.2.14 on 2023-09-06 11:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quote_requests', '0003_alter_quoterequest_company_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requestedproduct',
            name='quote_request',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requested_products', to='quote_requests.quoterequest'),
        ),
    ]