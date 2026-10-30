# Reference
## AliExpress
<details><summary><code>client.aliexpress.<a href="/src/api/resources/aliexpress/client/Client.ts">search</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/aliexpress/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aliexpress.search({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchAliexpressRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AliexpressClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aliexpress.<a href="/src/api/resources/aliexpress/client/Client.ts">browse</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/aliexpress/browse
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aliexpress.browse({
    categoryId: "categoryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.BrowseAliexpressRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AliexpressClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aliexpress.<a href="/src/api/resources/aliexpress/client/Client.ts">categories</a>({ ...params }) -> Apinoa.CategoryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CategoryList` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/aliexpress/categories
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aliexpress.categories();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CategoriesAliexpressRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AliexpressClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aliexpress.<a href="/src/api/resources/aliexpress/client/Client.ts">imageSearch</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/aliexpress/image-search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aliexpress.imageSearch({
    image: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ImageSearchAliexpressRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AliexpressClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aliexpress.<a href="/src/api/resources/aliexpress/client/Client.ts">product</a>({ ...params }) -> Apinoa.ProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Product` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/aliexpress/product
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aliexpress.product({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProductAliexpressRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AliexpressClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aliexpress.<a href="/src/api/resources/aliexpress/client/Client.ts">shipping</a>({ ...params }) -> Apinoa.ShippingQuoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ShippingQuote` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/aliexpress/shipping
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aliexpress.shipping({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ShippingAliexpressRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AliexpressClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Amazon
<details><summary><code>client.amazon.<a href="/src/api/resources/amazon/client/Client.ts">search</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/amazon/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.amazon.search({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchAmazonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.amazon.<a href="/src/api/resources/amazon/client/Client.ts">imageSearch</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit, up to 2 units. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/amazon/image-search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.amazon.imageSearch({
    image: {
        contentType: "contentType",
        data: "data"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ImageSearchAmazonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.amazon.<a href="/src/api/resources/amazon/client/Client.ts">browse</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/amazon/browse
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.amazon.browse({
    categoryId: "categoryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.BrowseAmazonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.amazon.<a href="/src/api/resources/amazon/client/Client.ts">categories</a>({ ...params }) -> Apinoa.CategoryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CategoryList` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/amazon/categories
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.amazon.categories();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CategoriesAmazonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.amazon.<a href="/src/api/resources/amazon/client/Client.ts">product</a>({ ...params }) -> Apinoa.ProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Product` in `data`. Costs 2 units, up to 32 units. Reference: https://apinoa.com/docs/api-reference/amazon/product
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.amazon.product({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProductAmazonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AmazonClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## App Store
<details><summary><code>client.appStore.<a href="/src/api/resources/appStore/client/Client.ts">search</a>({ ...params }) -> Apinoa.AppsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AppsPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/app-store/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appStore.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchAppStoreRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppStoreClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.appStore.<a href="/src/api/resources/appStore/client/Client.ts">app</a>({ ...params }) -> Apinoa.AppResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `App` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/app-store/app
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appStore.app();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AppAppStoreRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppStoreClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.appStore.<a href="/src/api/resources/appStore/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.AppReviewsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AppReviewsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/app-store/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appStore.reviews();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsAppStoreRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppStoreClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Baidu
<details><summary><code>client.baidu.<a href="/src/api/resources/baidu/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/baidu/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.baidu.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchBaiduRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BaiduClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.baidu.<a href="/src/api/resources/baidu/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/baidu/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.baidu.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsBaiduRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BaiduClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Bing
<details><summary><code>client.bing.<a href="/src/api/resources/bing/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/bing/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bing.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchBingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bing.<a href="/src/api/resources/bing/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/bing/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bing.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsBingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ChatGPT
<details><summary><code>client.chatgpt.<a href="/src/api/resources/chatgpt/client/Client.ts">answer</a>({ ...params }) -> Apinoa.AnswerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Answer` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/chatgpt/answer
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatgpt.answer({
    prompt: "prompt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AnswerChatgptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatgptClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Daum
<details><summary><code>client.daum.<a href="/src/api/resources/daum/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/daum/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.daum.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchDaumRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DaumClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.daum.<a href="/src/api/resources/daum/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/daum/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.daum.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsDaumRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DaumClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DuckDuckGo
<details><summary><code>client.duckduckgo.<a href="/src/api/resources/duckduckgo/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 10 units. Reference: https://apinoa.com/docs/api-reference/duckduckgo/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.duckduckgo.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchDuckduckgoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DuckduckgoClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.duckduckgo.<a href="/src/api/resources/duckduckgo/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/duckduckgo/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.duckduckgo.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsDuckduckgoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DuckduckgoClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Gemini
<details><summary><code>client.gemini.<a href="/src/api/resources/gemini/client/Client.ts">answer</a>({ ...params }) -> Apinoa.AnswerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Answer` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/gemini/answer
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gemini.answer({
    prompt: "prompt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AnswerGeminiRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GeminiClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Google
<details><summary><code>client.google.<a href="/src/api/resources/google/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/google/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.google.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchGoogleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.google.<a href="/src/api/resources/google/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.google.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsGoogleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.google.<a href="/src/api/resources/google/client/Client.ts">places</a>({ ...params }) -> Apinoa.PlacesPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlacesPage` in `data`. Costs 1 unit, up to 3 units. Reference: https://apinoa.com/docs/api-reference/google/places
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.google.places();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlacesGoogleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.google.<a href="/src/api/resources/google/client/Client.ts">place</a>({ ...params }) -> Apinoa.SerpPlaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SerpPlace` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google/place
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.google.place();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlaceGoogleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Google AI Mode
<details><summary><code>client.googleAiMode.<a href="/src/api/resources/googleAiMode/client/Client.ts">answer</a>({ ...params }) -> Apinoa.AnswerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Answer` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/google-ai-mode/answer
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleAiMode.answer({
    prompt: "prompt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AnswerGoogleAiModeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleAiModeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## GoogleAio
<details><summary><code>client.googleAio.<a href="/src/api/resources/googleAio/client/Client.ts">answer</a>({ ...params }) -> Apinoa.AnswerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Answer` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/google-aio/answer
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleAio.answer({
    prompt: "prompt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AnswerGoogleAioRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleAioClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Google Play
<details><summary><code>client.googlePlay.<a href="/src/api/resources/googlePlay/client/Client.ts">search</a>({ ...params }) -> Apinoa.AppsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AppsPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google-play/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googlePlay.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchGooglePlayRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GooglePlayClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.googlePlay.<a href="/src/api/resources/googlePlay/client/Client.ts">app</a>({ ...params }) -> Apinoa.AppResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `App` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google-play/app
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googlePlay.app();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AppGooglePlayRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GooglePlayClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.googlePlay.<a href="/src/api/resources/googlePlay/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.AppReviewsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AppReviewsPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google-play/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googlePlay.reviews();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsGooglePlayRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GooglePlayClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Google Shopping
<details><summary><code>client.googleShopping.<a href="/src/api/resources/googleShopping/client/Client.ts">search</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google-shopping/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleShopping.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchGoogleShoppingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleShoppingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.googleShopping.<a href="/src/api/resources/googleShopping/client/Client.ts">product</a>({ ...params }) -> Apinoa.ProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Product` in `data`. Costs 1 unit, up to 21 units. Reference: https://apinoa.com/docs/api-reference/google-shopping/product
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleShopping.product();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProductGoogleShoppingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleShoppingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.googleShopping.<a href="/src/api/resources/googleShopping/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.ReviewPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ReviewPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google-shopping/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleShopping.reviews();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsGoogleShoppingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleShoppingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Google Trends
<details><summary><code>client.googleTrends.<a href="/src/api/resources/googleTrends/client/Client.ts">explore</a>({ ...params }) -> Apinoa.TrendsExploreResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `TrendsExplore` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/google-trends/explore
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleTrends.explore({
    terms: "terms"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ExploreGoogleTrendsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleTrendsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.googleTrends.<a href="/src/api/resources/googleTrends/client/Client.ts">trending</a>({ ...params }) -> Apinoa.TrendingPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `TrendingPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/google-trends/trending
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googleTrends.trending({
    country: "AE"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.TrendingGoogleTrendsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GoogleTrendsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Instagram
<details><summary><code>client.instagram.<a href="/src/api/resources/instagram/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/instagram/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.instagram.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileInstagramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstagramClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.instagram.<a href="/src/api/resources/instagram/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/instagram/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.instagram.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostInstagramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstagramClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.instagram.<a href="/src/api/resources/instagram/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/instagram/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.instagram.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsInstagramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstagramClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.instagram.<a href="/src/api/resources/instagram/client/Client.ts">comments</a>({ ...params }) -> Apinoa.CommentPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CommentPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/instagram/comments
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.instagram.comments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CommentsInstagramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstagramClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.instagram.<a href="/src/api/resources/instagram/client/Client.ts">group</a>({ ...params }) -> Apinoa.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Group` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/instagram/group
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.instagram.group();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupInstagramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstagramClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.instagram.<a href="/src/api/resources/instagram/client/Client.ts">groups</a>({ ...params }) -> Apinoa.GroupPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `GroupPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/instagram/groups
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.instagram.groups();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupsInstagramRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InstagramClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## LinkedIn
<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">comments</a>({ ...params }) -> Apinoa.CommentPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CommentPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/comments
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.comments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CommentsLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">group</a>({ ...params }) -> Apinoa.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Group` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/group
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.group();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">job</a>({ ...params }) -> Apinoa.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Job` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/job
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.job();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.JobLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.linkedin.<a href="/src/api/resources/linkedin/client/Client.ts">jobs</a>({ ...params }) -> Apinoa.JobPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `JobPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/linkedin/jobs
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkedin.jobs();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.JobsLinkedinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedinClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Naver
<details><summary><code>client.naver.<a href="/src/api/resources/naver/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/naver/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naver.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchNaverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.naver.<a href="/src/api/resources/naver/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/naver/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naver.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsNaverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.naver.<a href="/src/api/resources/naver/client/Client.ts">places</a>({ ...params }) -> Apinoa.PlacesPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlacesPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/naver/places
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naver.places();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlacesNaverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.naver.<a href="/src/api/resources/naver/client/Client.ts">place</a>({ ...params }) -> Apinoa.SerpPlaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SerpPlace` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/naver/place
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naver.place();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlaceNaverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.naver.<a href="/src/api/resources/naver/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.PlaceReviewsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlaceReviewsPage` in `data`. Costs 1 unit, up to 10 units. Reference: https://apinoa.com/docs/api-reference/naver/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naver.reviews();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsNaverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## NaverAiBrief
<details><summary><code>client.naverAiBrief.<a href="/src/api/resources/naverAiBrief/client/Client.ts">answer</a>({ ...params }) -> Apinoa.AnswerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Answer` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/naver-ai-brief/answer
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naverAiBrief.answer({
    prompt: "prompt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AnswerNaverAiBriefRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverAiBriefClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Naver AI Tab
<details><summary><code>client.naverAiTab.<a href="/src/api/resources/naverAiTab/client/Client.ts">answer</a>({ ...params }) -> Apinoa.AnswerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Answer` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/naver-ai-tab/answer
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.naverAiTab.answer({
    prompt: "prompt"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.AnswerNaverAiTabRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NaverAiTabClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Reddit
<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/reddit/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">profiles</a>({ ...params }) -> Apinoa.AccountPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AccountPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/reddit/profiles
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.profiles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfilesRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/reddit/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/reddit/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">comments</a>({ ...params }) -> Apinoa.CommentPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CommentPage` in `data`. Costs 1 unit, up to 3 units. Reference: https://apinoa.com/docs/api-reference/reddit/comments
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.comments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CommentsRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">group</a>({ ...params }) -> Apinoa.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Group` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/reddit/group
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.group();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reddit.<a href="/src/api/resources/reddit/client/Client.ts">groups</a>({ ...params }) -> Apinoa.GroupPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `GroupPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/reddit/groups
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reddit.groups();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupsRedditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RedditClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Seznam
<details><summary><code>client.seznam.<a href="/src/api/resources/seznam/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/seznam/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.seznam.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchSeznamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SeznamClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.seznam.<a href="/src/api/resources/seznam/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/seznam/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.seznam.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsSeznamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SeznamClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Shopify
<details><summary><code>client.shopify.<a href="/src/api/resources/shopify/client/Client.ts">search</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/shopify/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shopify.search({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchShopifyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShopifyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shopify.<a href="/src/api/resources/shopify/client/Client.ts">imageSearch</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. POST only, with a JSON body. Reference: https://apinoa.com/docs/api-reference/shopify/image-search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shopify.imageSearch({
    image: {
        contentType: "contentType",
        data: "data"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ImageSearchShopifyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShopifyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shopify.<a href="/src/api/resources/shopify/client/Client.ts">catalog</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/shopify/catalog
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shopify.catalog({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CatalogShopifyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShopifyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shopify.<a href="/src/api/resources/shopify/client/Client.ts">product</a>({ ...params }) -> Apinoa.ProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Product` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/shopify/product
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shopify.product({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProductShopifyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShopifyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shopify.<a href="/src/api/resources/shopify/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.ReviewPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ReviewPage` in `data`. Costs 1 unit, up to 7 units. Reference: https://apinoa.com/docs/api-reference/shopify/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shopify.reviews({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsShopifyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShopifyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sogou
<details><summary><code>client.sogou.<a href="/src/api/resources/sogou/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 10 units. Reference: https://apinoa.com/docs/api-reference/sogou/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sogou.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchSogouRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SogouClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sogou.<a href="/src/api/resources/sogou/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/sogou/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sogou.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsSogouRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SogouClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Threads
<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/threads/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/threads/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/threads/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.threads.<a href="/src/api/resources/threads/client/Client.ts">comments</a>({ ...params }) -> Apinoa.CommentPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CommentPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/threads/comments
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threads.comments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CommentsThreadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ThreadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TikTok
<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktok/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">profiles</a>({ ...params }) -> Apinoa.AccountPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AccountPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/tiktok/profiles
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.profiles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfilesTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktok/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/tiktok/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">comments</a>({ ...params }) -> Apinoa.CommentPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CommentPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktok/comments
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.comments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CommentsTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">group</a>({ ...params }) -> Apinoa.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Group` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktok/group
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.group();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">groups</a>({ ...params }) -> Apinoa.GroupPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `GroupPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/tiktok/groups
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.groups();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupsTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktok.<a href="/src/api/resources/tiktok/client/Client.ts">media</a>({ ...params }) -> Apinoa.MediaFileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `MediaFile` in `data`. Costs 2 units. Reference: https://apinoa.com/docs/api-reference/tiktok/media
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktok.media();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.MediaTiktokRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TikTok Shop
<details><summary><code>client.tiktokshop.<a href="/src/api/resources/tiktokshop/client/Client.ts">search</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktokshop/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktokshop.search({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchTiktokshopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokshopClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktokshop.<a href="/src/api/resources/tiktokshop/client/Client.ts">browse</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktokshop/browse
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktokshop.browse({
    categoryId: "categoryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.BrowseTiktokshopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokshopClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktokshop.<a href="/src/api/resources/tiktokshop/client/Client.ts">categories</a>({ ...params }) -> Apinoa.CategoryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CategoryList` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktokshop/categories
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktokshop.categories();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CategoriesTiktokshopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokshopClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktokshop.<a href="/src/api/resources/tiktokshop/client/Client.ts">catalog</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktokshop/catalog
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktokshop.catalog({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CatalogTiktokshopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokshopClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktokshop.<a href="/src/api/resources/tiktokshop/client/Client.ts">product</a>({ ...params }) -> Apinoa.ProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Product` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktokshop/product
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktokshop.product({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProductTiktokshopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokshopClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tiktokshop.<a href="/src/api/resources/tiktokshop/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.ReviewPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ReviewPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tiktokshop/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tiktokshop.reviews({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsTiktokshopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TiktokshopClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tripadvisor
<details><summary><code>client.tripadvisor.<a href="/src/api/resources/tripadvisor/client/Client.ts">places</a>({ ...params }) -> Apinoa.PlacesPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlacesPage` in `data`. Costs 1 unit, up to 4 units. Reference: https://apinoa.com/docs/api-reference/tripadvisor/places
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tripadvisor.places();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlacesTripadvisorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TripadvisorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tripadvisor.<a href="/src/api/resources/tripadvisor/client/Client.ts">place</a>({ ...params }) -> Apinoa.SerpPlaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SerpPlace` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/tripadvisor/place
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tripadvisor.place();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlaceTripadvisorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TripadvisorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tripadvisor.<a href="/src/api/resources/tripadvisor/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.PlaceReviewsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlaceReviewsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/tripadvisor/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tripadvisor.reviews();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsTripadvisorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TripadvisorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Walmart
<details><summary><code>client.walmart.<a href="/src/api/resources/walmart/client/Client.ts">search</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/walmart/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.walmart.search({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchWalmartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalmartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.walmart.<a href="/src/api/resources/walmart/client/Client.ts">browse</a>({ ...params }) -> Apinoa.SearchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SearchResult` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/walmart/browse
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.walmart.browse({
    categoryId: "categoryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.BrowseWalmartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalmartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.walmart.<a href="/src/api/resources/walmart/client/Client.ts">categories</a>({ ...params }) -> Apinoa.CategoryListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CategoryList` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/walmart/categories
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.walmart.categories();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CategoriesWalmartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalmartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.walmart.<a href="/src/api/resources/walmart/client/Client.ts">product</a>({ ...params }) -> Apinoa.ProductResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Product` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/walmart/product
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.walmart.product({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProductWalmartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalmartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.walmart.<a href="/src/api/resources/walmart/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.ReviewPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ReviewPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/walmart/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.walmart.reviews({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsWalmartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalmartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## X
<details><summary><code>client.x.<a href="/src/api/resources/x/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/x/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.x.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileXRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `XClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.x.<a href="/src/api/resources/x/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/x/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.x.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostXRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `XClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.x.<a href="/src/api/resources/x/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/x/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.x.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsXRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `XClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.x.<a href="/src/api/resources/x/client/Client.ts">group</a>({ ...params }) -> Apinoa.GroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Group` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/x/group
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.x.group();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupXRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `XClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Yahoo
<details><summary><code>client.yahoo.<a href="/src/api/resources/yahoo/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 9 units. Reference: https://apinoa.com/docs/api-reference/yahoo/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yahoo.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchYahooRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YahooClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.yahoo.<a href="/src/api/resources/yahoo/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/yahoo/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yahoo.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsYahooRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YahooClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## YahooJapan
<details><summary><code>client.yahooJapan.<a href="/src/api/resources/yahooJapan/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 10 units. Reference: https://apinoa.com/docs/api-reference/yahoo-japan/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yahooJapan.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchYahooJapanRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YahooJapanClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.yahooJapan.<a href="/src/api/resources/yahooJapan/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/yahoo-japan/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yahooJapan.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsYahooJapanRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YahooJapanClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Yandex
<details><summary><code>client.yandex.<a href="/src/api/resources/yandex/client/Client.ts">search</a>({ ...params }) -> Apinoa.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `ResultsPage` in `data`. Costs 1 unit, up to 5 units. Reference: https://apinoa.com/docs/api-reference/yandex/search
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yandex.search();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SearchYandexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YandexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.yandex.<a href="/src/api/resources/yandex/client/Client.ts">suggestions</a>({ ...params }) -> Apinoa.SuggestionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Suggestions` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/yandex/suggestions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yandex.suggestions({
    q: "q"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.SuggestionsYandexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YandexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.yandex.<a href="/src/api/resources/yandex/client/Client.ts">places</a>({ ...params }) -> Apinoa.PlacesPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlacesPage` in `data`. Costs 1 unit, up to 4 units. Reference: https://apinoa.com/docs/api-reference/yandex/places
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yandex.places();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlacesYandexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YandexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.yandex.<a href="/src/api/resources/yandex/client/Client.ts">place</a>({ ...params }) -> Apinoa.SerpPlaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `SerpPlace` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/yandex/place
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yandex.place();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PlaceYandexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YandexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.yandex.<a href="/src/api/resources/yandex/client/Client.ts">reviews</a>({ ...params }) -> Apinoa.PlaceReviewsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PlaceReviewsPage` in `data`. Costs 1 unit, up to 4 units. Reference: https://apinoa.com/docs/api-reference/yandex/reviews
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.yandex.reviews();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ReviewsYandexRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YandexClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## YouTube
<details><summary><code>client.youtube.<a href="/src/api/resources/youtube/client/Client.ts">profile</a>({ ...params }) -> Apinoa.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Account` in `data`. Costs 1 unit, up to 3 units. Reference: https://apinoa.com/docs/api-reference/youtube/profile
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.youtube.profile();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfileYoutubeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YoutubeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.youtube.<a href="/src/api/resources/youtube/client/Client.ts">profiles</a>({ ...params }) -> Apinoa.AccountPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `AccountPage` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/youtube/profiles
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.youtube.profiles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.ProfilesYoutubeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YoutubeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.youtube.<a href="/src/api/resources/youtube/client/Client.ts">post</a>({ ...params }) -> Apinoa.PostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `Post` in `data`. Costs 1 unit. Reference: https://apinoa.com/docs/api-reference/youtube/post
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.youtube.post();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostYoutubeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YoutubeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.youtube.<a href="/src/api/resources/youtube/client/Client.ts">posts</a>({ ...params }) -> Apinoa.PostPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `PostPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/youtube/posts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.youtube.posts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.PostsYoutubeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YoutubeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.youtube.<a href="/src/api/resources/youtube/client/Client.ts">comments</a>({ ...params }) -> Apinoa.CommentPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `CommentPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/youtube/comments
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.youtube.comments();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.CommentsYoutubeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YoutubeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.youtube.<a href="/src/api/resources/youtube/client/Client.ts">groups</a>({ ...params }) -> Apinoa.GroupPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns `GroupPage` in `data`. Costs 1 unit, up to 2 units. Reference: https://apinoa.com/docs/api-reference/youtube/groups
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.youtube.groups();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Apinoa.GroupsYoutubeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `YoutubeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Marketplaces
<details><summary><code>client.marketplaces.<a href="/src/api/resources/marketplaces/client/Client.ts">list</a>() -> Apinoa.CatalogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Public: works without a key. Reference: https://apinoa.com/docs/api-reference/marketplaces
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.marketplaces.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MarketplacesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Image translate
<details><summary><code>client.imageTranslate.<a href="/src/api/resources/imageTranslate/client/Client.ts">supportedFonts</a>() -> Apinoa.SupportedFontsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reference: https://apinoa.com/docs/api-reference/image-translate/supported-fonts
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.imageTranslate.supportedFonts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ImageTranslateClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

