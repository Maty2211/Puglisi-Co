from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["name", "email", "message"]

    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError(
                "El nombre debe tener al menos 2 caracteres."
            )
        return value

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError(
                "El mensaje debe ser más descriptivo."
            )
        return value
