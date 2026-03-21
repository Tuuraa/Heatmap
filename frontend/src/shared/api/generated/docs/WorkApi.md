# WorkApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**workControllerEndWorkSession**](WorkApi.md#workcontrollerendworksession) | **POST** /work/end | End work session |
| [**workControllerGetCurrentWorkSession**](WorkApi.md#workcontrollergetcurrentworksession) | **GET** /work/current | Get current work session |
| [**workControllerStartWorkSession**](WorkApi.md#workcontrollerstartworksession) | **POST** /work/start | Start work session |



## workControllerEndWorkSession

> WorkSessionResponse workControllerEndWorkSession()

End work session

### Example

```ts
import {
  Configuration,
  WorkApi,
} from '';
import type { WorkControllerEndWorkSessionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WorkApi();

  try {
    const data = await api.workControllerEndWorkSession();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkSessionResponse**](WorkSessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workControllerGetCurrentWorkSession

> CurrentSessionResponse workControllerGetCurrentWorkSession()

Get current work session

### Example

```ts
import {
  Configuration,
  WorkApi,
} from '';
import type { WorkControllerGetCurrentWorkSessionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WorkApi();

  try {
    const data = await api.workControllerGetCurrentWorkSession();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CurrentSessionResponse**](CurrentSessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workControllerStartWorkSession

> WorkSessionResponse workControllerStartWorkSession()

Start work session

### Example

```ts
import {
  Configuration,
  WorkApi,
} from '';
import type { WorkControllerStartWorkSessionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new WorkApi();

  try {
    const data = await api.workControllerStartWorkSession();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkSessionResponse**](WorkSessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

