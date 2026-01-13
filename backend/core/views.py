from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

from .serializers import ContactMessageSerializer

@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})

@api_view(["POST"])
def contact(request):
    serializer = ContactMessageSerializer(data=request.data)

    if serializer.is_valid():
        message = serializer.save()

        send_mail(
            subject="Nueva consulta recibida",
            message=(
                f"Nombre: {message.name}\n"
                f"Email: {message.email}\n\n"
                f"Mensaje:\n{message.message}"
            ),
            from_email=None,
            recipient_list=["consultoria@gmail.com"],
            fail_silently=False,
        )

        return Response(
            {"message": "Consulta recibida correctamente"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

