# Assignment 5: React REST Component

## Goal

Build a small React component that consumes a REST endpoint and handles loading, success, and error states using an AI coding assistant.

## Required Tasks

- [ ] Inspect the existing React/Vite project.
- [ ] Use a REST endpoint to retrieve data.
- [ ] Keep the existing product API endpoint or choose another public REST endpoint.
- [ ] Add a loading state that is shown while the request is in progress.
- [ ] Add an error state that is shown when the request fails.
- [ ] Check `response.ok` so HTTP errors are handled correctly.
- [ ] Parse the successful response as JSON.
- [ ] Store the returned data in React state.
- [ ] Render the returned data in the existing UI.
- [ ] Preserve the existing product list and product card behavior.
- [ ] Prevent state updates after the component is unmounted.
- [ ] Keep the implementation focused and avoid unrelated changes.

## Recommended Files

The main implementation should be made in:

- `src/App.jsx`

The existing presentation components can remain unchanged:

- `src/components/ProductList.jsx`
- `src/components/ProductCard.jsx`

## Expected UI States

### Loading state

Display a message such as:

```text
Loading products...
```

### Error state

Display a readable error message such as:

```text
Error: Unable to load products.
```

### Success state

Pass the API response to `ProductList` and display the product cards.

## Suggested Implementation Flow

1. Create `products`, `loading`, and `error` state values.
2. Start the fetch request inside `useEffect`.
3. Set `loading` to `true` before the request starts.
4. Clear any previous error before the request starts.
5. Call the REST endpoint with `fetch`.
6. Throw an error when `response.ok` is false.
7. Convert the response to JSON.
8. Save the result to the products state.
9. Catch request or parsing errors and save the message to the error state.
10. Set `loading` to `false` in the `finally` block.
11. Render loading, error, or success content based on the current state.
12. Keep the existing effect cleanup logic.

## Acceptance Criteria

- [ ] The application shows a loading message before the API response arrives.
- [ ] The application shows the product list after a successful API response.
- [ ] The application shows an error message when the API request fails.
- [ ] Non-2xx HTTP responses are treated as errors.
- [ ] The browser console does not show avoidable React errors.
- [ ] Existing product cards still render correctly.
- [ ] The implementation uses React state and `useEffect` appropriately.
- [ ] The code is readable and does not include unrelated refactoring.

## AI Prompt Transcript To Submit

Save the prompts and important AI responses used during development. The transcript should show how the AI assistant helped create the component.

Suggested prompts:

```text
Inspect this React/Vite project and identify what needs to be changed to satisfy this assignment: build a React component consuming a REST endpoint with loading and error states. The app currently fetches products from Fake Store API. Do not change unrelated components.
```

```text
Update App.jsx to add loading and error states. Handle unsuccessful HTTP responses with response.ok, show a loading message while fetching, show an error message when fetching fails, and render ProductList only after a successful response. Preserve the existing cleanup behavior.
```

```text
Validate the implementation by running the project lint and production build checks. Summarize how the loading, success, and error states work.
```

The submitted transcript should include:

- The original assignment prompt.
- The prompts sent to the AI coding assistant.
- The relevant AI responses or generated code.
- Any follow-up prompts used to fix or validate the implementation.

## Verification Commands

Run these commands from the `frontend` folder:

```bash
npm run lint
npm run build
```

Both commands should complete successfully before submission.

## Submission Package

Submit the following:

- [ ] The completed React component in `src/App.jsx`.
- [ ] The AI prompt transcript.
- [ ] A short explanation of the loading, success, and error states.
- [ ] Evidence that `npm run lint` passed.
- [ ] Evidence that `npm run build` passed.
