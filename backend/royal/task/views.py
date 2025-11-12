from django.http import JsonResponse
from django.conf import settings
import time
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


# provide list with delay for testing purposes, Task A
def delayed_list(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    time.sleep(5) # simulate delay
    data = ['item1', 'item2', 'item3']
    return JsonResponse({'data': data}, status=200)


# simple health check endpoint, Task B
def health_check(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    return JsonResponse({'status': 'ok', 'version': settings.APP_VERSION }, status=200)


# endpoint to receive stake value, Task C
@csrf_exempt
def stake_value(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    try:
        body = json.loads(request.body)
        data = body.get('data', 0)
        # print("Received stake:", data)
        time.sleep(2)  # simulate processing delay
        if data < 1:
            return JsonResponse({'error': 'Stake must be at least 1'}, status=400)
        # Process the stake value as needed
        return JsonResponse({'message': f'Stake of {data} received successfully'}, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)