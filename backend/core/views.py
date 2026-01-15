from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactMessageSerializer


@api_view(["POST"])
def contact(request):
    serializer = ContactSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    contact = serializer.save()

    try:
        send_mail(
            subject="Nueva consulta desde la web",
            message=f"""
Nombre: {contact.name}
Email: {contact.email}

Mensaje:
{contact.message}
""",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )
    except Exception as e:
        # importante: NO romper la request
        print("MAIL ERROR:", e)

    return Response({"ok": True}, status=status.HTTP_201_CREATED)

@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})