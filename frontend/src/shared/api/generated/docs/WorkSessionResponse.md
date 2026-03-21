
# WorkSessionResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`startedAt` | [PauseIntervalStartedAt](PauseIntervalStartedAt.md)
`endedAt` | [PauseIntervalStartedAt](PauseIntervalStartedAt.md)
`pauses` | [Array&lt;PauseInterval&gt;](PauseInterval.md)

## Example

```typescript
import type { WorkSessionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "startedAt": null,
  "endedAt": null,
  "pauses": null,
} satisfies WorkSessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkSessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


