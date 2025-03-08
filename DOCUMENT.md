
# Vercel and Shopify Integration

## Integrate Vercel with Shopify to deploy your headless storefront.

Shopify is an ecommerce platform that allows you to build and manage online storefronts. Shopify does offer themes, but this integration guide will explain how to deploy your own, highly-performant, custom headless storefront using Next.js on Vercel's Frontend Cloud.

---

## Using the Next.js Commerce Template

This guide uses the **Next.js Commerce** template to connect your Shopify store to a Vercel deployment. When you use this template, you'll be automatically prompted to connect your Shopify storefront during deployment.

### Important Parts to Know

1. **Configure Shopify for use as a headless CMS**  
2. **Deploy your headless storefront on Vercel**  
3. **Configure environment variables**

Even if you are not using Next.js Commerce, you can still use this guide as a roadmap to create your own headless Shopify theme.

---

## Getting Started

To help you get started, we built a template using Next.js, Shopify, and Tailwind CSS:

- **Next.js Commerce**  
  [Next.js Commerce](https://github.com/vercel/commerce)  
  *Starter kit for high-performance commerce with Shopify.*

You can either deploy the template above to Vercel or use the steps below to clone it to your machine and deploy it locally.

---

## Configure Shopify

### 1. Create a Shopify Account and Storefront

- If you have an existing Shopify account and storefront, you can use it with the rest of these steps.
- If you do not have an existing Shopify account and storefront, you'll need to create one.

> **Note:**  
> Next.js Commerce will not work with a Shopify Starter plan as it does not allow installation of custom themes, which is required to run as a headless storefront.

### 2. Install the Shopify Headless Theme

To use Next.js Commerce as your headless Shopify theme, you need to install the **Shopify Headless theme**. This enables a seamless flow between your headless site on Vercel and your Shopify hosted checkout, order details, links in emails, and more.

1. **Download Shopify Headless Theme.**  
   *(Use the official download link provided by Shopify or your documentation.)*

2. Navigate to:  
   ```
   https://[your-shopify-store-subdomain].myshopify.com/admin/themes
   ```
   Click **Add theme**, and then **Upload zip file**.

3. Upload the Shopify Headless theme to Shopify.  
   Select the downloaded zip file from above, and click the green **Upload file** button.

4. Click **Customize**.

5. Click **Theme settings** (the paintbrush icon), expand the **STOREFRONT** section, enter your headless store domain, click the gray **Publish** button.

6. Confirm the theme change by clicking the green **Save and publish** button.

The headless theme should now be your current active theme.

### 3. Install the Shopify Headless App

Shopify provides a **Storefront API** which allows you to fetch products, collections, pages, and more for your headless store. By installing the **Headless app**, you can create an access token that can be used to authenticate requests from your Vercel deployment.

1. Navigate to:  
   ```
   https://[your-shopify-store-subdomain].myshopify.com/admin/settings/apps
   ```
   and click the green **Shopify App Store** button.

2. Search for **Headless** and click on the **Headless** app.

3. Click the black **Add app** button.

4. Click the green **Add sales channel** button.

5. Click the green **Create storefront** button.

6. Copy the **public access token** as it will be used when we configure environment variables.

> **Note:** If you need to reference the public access token again, you can navigate to:
> ```
> https://[your-shopify-store-subdomain].myshopify.com/admin/headless_storefronts
> ```

### 4. Configure Your Shopify Branding and Design

Even though you're creating a headless store, there are still a few aspects Shopify will control:

- **Checkout**  
- **Emails**  
- **Order status**  
- **Order history**  
- **Favicon** (for any Shopify controlled pages)

You can use Shopify's admin to customize these pages to match your brand and design.

#### 4.1. Customize Checkout, Order Status, and Order History

1. Navigate to:
   ```
   https://[your-shopify-store-subdomain].myshopify.com/admin/settings/checkout
   ```
   and click the green **Customize** button.

2. Click **Branding** (the paintbrush icon) and customize your brand.  
   There are three steps/pages to the checkout flow. Use the dropdown to change pages and adjust branding as needed on each page. Click **Save** when you are done.

3. Navigate to:
   ```
   https://[your-shopify-store-subdomain].myshopify.com/admin/settings/branding
   ```
   and customize settings to match your brand (for order status and history).

#### 4.2. Customize Emails

Navigate to:
```
https://[your-shopify-store-subdomain].myshopify.com/admin/settings/email_settings
```
and customize settings to match your brand.

#### 4.3. Customize Favicon

1. Navigate to:
   ```
   https://[your-shopify-store-subdomain].myshopify.com/admin/themes
   ```
   and click the green **Customize** button.

2. Click **Theme settings** (the paintbrush icon), expand the **FAVICON** section, upload your favicon, then click the **Save** button.

---

## Configure Shopify Webhooks

Utilizing Shopify's webhooks and listening for select webhook event topics, you can use **Next.js on-demand revalidation** to keep data fetches indefinitely cached until data in the Shopify store changes.

**Next.js Commerce** is pre-configured to listen for the following Shopify webhook events and automatically revalidate fetches:

- `collections/create`
- `collections/delete`
- `collections/update`
- `products/create`
- `products/delete`
- `products/update`  
  *(This includes when variants are added, updated, and removed, as well as when products are purchased so inventory and out-of-stock items can be updated.)*

### 1. Create a Secret for Secure Revalidation

Create your own secret or generate a random UUID. This secret value will be used when we configure environment variables.

### 2. Configure Shopify Webhooks in the Shopify Admin

1. Navigate to:  
   ```
   https://[your-shopify-store-subdomain].myshopify.com/admin/settings/notifications
   ```
   and add webhooks for all six event topics listed above.

2. You can add more sets for other preview URLs, environments, or local development.  
   Append `?secret=[your-secret]` to each URL, where `[your-secret]` is the secret you created.

### 3. Testing Webhooks During Local Development

**ngrok** is the easiest way to test webhooks while developing locally:

1. Install and configure [ngrok](https://ngrok.com) (you will need to create an account).
2. Run your app locally, for example:
   ```
   npm run dev
   ```
3. In a separate terminal session, run:
   ```
   ngrok http 3000
   ```
4. Use the URL generated by ngrok and add or update your webhook URLs in Shopify.

You can now make changes to your store, and your local app should receive updates. You can also use the **Send test notification** button to trigger a generic webhook test.

---

## Using Shopify as a Full-Featured CMS

**Next.js Commerce** is fully powered by Shopify in every way. All products, collections, pages, header and footer menus, and SEO are controlled by Shopify.

### 1. Products

- Navigate to:
  ```
  https://[your-shopify-store-subdomain].myshopify.com/admin/products
  ```
  to manage your products.
  
- **Only Active products** are shown. Draft products will not be shown until they are marked as Active.
- Active products can still be hidden by adding a `nextjs-frontend-hidden` tag on the product. This tag also tells search engines not to index or crawl the product, but the product will still be directly accessible by URL (a “secret” product).
- Product options and variant combinations are driven from Shopify. When selecting options on the product detail page, other variant combinations will be visually validated (like Amazon).
- Products that are active but out of stock will display, but with an “out of stock” label, and cannot be added to the cart.

### 2. Collections

- Navigate to:
  ```
  https://[your-shopify-store-subdomain].myshopify.com/admin/collections
  ```
  to manage your collections.

- **All available collections** appear on the search page as filters on the left, with one exception:
  - Any collection names that start with **“hidden”** will not show up on the headless front end.
  
- **Pre-configured hidden collections** in Next.js Commerce:
  1. **Hidden: Homepage Featured Items** — Products in this collection appear in the three featured blocks on the homepage.
  2. **Hidden: Homepage Carousel** — Products in this collection appear in the auto-scrolling carousel on the homepage.

### 3. Pages

- Navigate to:
  ```
  https://[your-shopify-store-subdomain].myshopify.com/admin/pages
  ```
  to manage your pages.

- **Next.js Commerce** contains a dynamic `[page]` route, which:
  - Looks for a corresponding page in Shopify.
  - If found, displays its rich content using Tailwind’s typography plugin and prose.
  - If not found, returns a 404 page.

### 4. Navigation Menus

- Navigate to:
  ```
  https://[your-shopify-store-subdomain].myshopify.com/admin/menus
  ```
  to manage your navigation menus.

- **Header and Footer Navigation:**  
  Next.js Commerce is pre-configured to be controlled by Shopify navigation menus. They can link to collections, pages, external links, and more.  

- **Recommended Menus:**
  1. **Next.js Frontend Header Menu** — For the headless frontend header.
  2. **Next.js Frontend Footer Menu** — For the headless frontend footer.

### 5. SEO

- Shopify's products, collections, and pages allow custom **SEO titles and descriptions**.
- **Next.js Commerce** will display these custom values, with sensible fallbacks if none are provided.

---

## Deploy to Vercel

Now that your Shopify store is configured, you can deploy your code to Vercel.

### 1. Clone the Repository

You can clone the repo using the following command (example with pnpm):

```bash
pnpm create next-app --example https://github.com/vercel/commerce
```

*(You can also use yarn or npm.)*

### 2. Publish Your Code

Publish your code to a Git provider like GitHub.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-account/your-repo
git push -u origin main
```

### 3. Import Your Project

Import the repository into a new Vercel project.  
Vercel will automatically detect you are using Next.js and configure optimal build settings.

### 4. Configure Environment Variables

Create **Vercel Environment Variables** with the following names and values:

1. **COMPANY_NAME** (optional)  
   *Displayed in the footer next to the copyright in case the company is different from the site name, for example “Acme, Inc.”*

2. **SHOPIFY_STORE_DOMAIN**  
   *Used to connect to your Shopify storefront, for example `[your-shopify-store-subdomain].myshopify.com`.*

3. **SHOPIFY_STOREFRONT_ACCESS_TOKEN**  
   *Used to secure API requests between Shopify and your headless site. This was created when you installed the Headless app.*

4. **SHOPIFY_REVALIDATION_SECRET**  
   *Used to secure data revalidation requests between Shopify and your headless site. This was created when you generated a secret for secure revalidation.*

5. **SITE_NAME**  
   *Displayed in the header and footer navigation next to the logo, for example “Acme Store.”*

6. **TWITTER_CREATOR**  
   *Used in Twitter OG metadata, for example `@nextjs`.*

7. **TWITTER_SITE**  
   *Used in Twitter OG metadata, for example `https://nextjs.org`.*

> **Tip:** You can use the Vercel CLI to set up your local development environment variables with these values.

---

## Final Notes

By following this guide, you will:

- **Configure Shopify** as a headless CMS for products, collections, pages, and navigation.
- **Deploy** a high-performance storefront on Vercel using the Next.js Commerce template.
- **Secure** your storefront with environment variables and on-demand revalidation.

You now have a fully functional headless Shopify storefront with Next.js Commerce!