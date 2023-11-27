[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)

# ChatBotKit Fetch SDK

The ChatBotKit SDK for Fetch offers an isomorphic implementation of the standard fetch browser function, enriched with several helper methods. This versatile SDK is compatible with various environments, including AWS Lambda, Vercel Serverless and Edge, Cloudflare Workers, standard web browsers, and more, making it a flexible choice for diverse projects.

## Getting Started

To begin using the ChatBotKit Fetch SDK, follow these steps:

1. **Installation**: Add the SDK to your project using npm:

   ```bash
   npm install @chatbotkit/fetch
   ```

2. **Usage**: The SDK can be used in any environment, ensuring a consistent fetch functionality across platforms. Here’s an example of how to use it:

   ```javascript
   import fetch, { withTimeout, withRetry } from '@chatbotkit/fetch'

   // Enhance fetch with retry and timeout capabilities
   const fetchPlusPlus = withRetry(withTimeout(fetch))

   async function doWork() {
     const response = await fetchPlusPlus('https://your-api-url.com', {
       timeout: 30000, // Timeout in milliseconds
       retries: 5, // Number of retry attempts
       retryDelay: 200, // Delay between retries in milliseconds
     })

     // Handle the response
     // ...
   }
   ```

   This code snippet demonstrates how to import and use the enhanced fetch function, providing robust error handling and timeout management for network requests.

## Documentation

For comprehensive information about the ChatBotKit Fetch SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [official documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_fetch.html).
