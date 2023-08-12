from rest_framework.viewsets import ModelViewSet

from quote_requests.serializers import QuoteRequestSerializer


class QuoteRequestsView(ModelViewSet):
    authentication_classes = []
    serializer_class = QuoteRequestSerializer
