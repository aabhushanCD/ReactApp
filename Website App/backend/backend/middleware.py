# middleware.py
import logging

logger = logging.getLogger('django.request')

class RequestResponseLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log request
        logger.info(f"[Request] {request.method} {request.path}")

        # Proceed with the request
        response = self.get_response(request)

        # Log response
        logger.info(f"[Response] {response.status_code}")

        return response
