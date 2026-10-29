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

