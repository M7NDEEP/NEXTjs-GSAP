# GSAP with Next.js Example 🚀

Explore two different methods of integrating GSAP (GreenSock Animation Platform) with Next.js, catering to different use cases. 👩‍💻

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js` for one method and `pages/about.js` for the other.

## Use `useLayoutEffect` in `index.js`

In `pages/index.js`, we utilize the `useLayoutEffect` hook to orchestrate animations immediately before the browser paints. This method is well-suited for animations that need to be applied synchronously.

## Use `useState` in `about.js`

In `pages/about.js`, we employ the `useState` hook to manage animations. This approach is suitable for scenarios where animations depend on dynamic changes in the component state.

## Learn More

To learn more about Next.js and GSAP, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [GSAP Documentation](https://greensock.com/docs/) - Explore GSAP's powerful animation capabilities.

Feel free to customize and enhance this example to fit your animation needs! 🎉