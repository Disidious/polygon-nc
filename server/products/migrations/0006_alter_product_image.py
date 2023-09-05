# Generated by Django 3.2.14 on 2023-08-16 00:17

from django.db import migrations, models
import products.validators


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20230812_1724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='product_images/', validators=[products.validators.validate_image_extension]),
        ),
    ]