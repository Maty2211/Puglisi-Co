from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactMessageSerializer


@api_view(["POST"])
def contact(request):
    serializer = ContactMessageSerializer(data=request.data)
    print("MAIL CONFIG:", settings.EMAIL_HOST_USER)

    if not serializer.is_valid():
        return Response(
            {"errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    serializer.save()

    return Response(
        {"message": "Consulta recibida correctamente"},
        status=status.HTTP_201_CREATED,
    )

@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})