# AOI Map Application

A single-page application for viewing satellite imagery and managing Areas of Interest (AOIs), built with React, TypeScript, Vite, and MapLibre GL JS.

## Setup & Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

3.  **Run Tests:**
    ```bash
    ```bash
    npx playwright test
    ```

## GitHub & Deployment

To push this project to GitHub:

1.  Initialize Git: `git init`
2.  Add files: `git add .`
3.  Commit: `git commit -m "Initial commit"`
4.  Add remote: `git remote add origin <your-repo-url>`
5.  Push: `git push -u origin main`

To run this project after cloning:

1.  Clone: `git clone <repo-url>`
2.  Install: `npm install`
3.  Run: `npm run dev`

## Map Library Choice

**Selected Library:** **MapLibre GL JS** (via `react-map-gl`)

**Justification:**
-   **Performance:** MapLibre uses WebGL, which is critical for the requirement of handling "1000s of points/polygons" in the future. It can render large vector datasets smoothly compared to DOM-based libraries like Leaflet.
-   **WMS Support:** It supports WMS raster sources natively.
-   **Ecosystem:** `react-map-gl` provides excellent React bindings, making state management cleaner.

**Alternatives Considered:**
-   **Leaflet:** Easier to set up for simple WMS, but performance degrades significantly with large numbers of interactive DOM markers/polygons.
-   **OpenLayers:** Very powerful and supports WMS well, but has a steeper learning curve and more verbose API compared to MapLibre/Mapbox ecosystem.

## Architecture Decisions

-   **Vite + React + TypeScript:** The modern standard for fast, type-safe SPA development.
-   **Tailwind CSS:** Used for rapid, utility-first styling. It ensures consistency and makes it easy to implement the "premium" dark mode design.
-   **Component Structure:**
    -   `src/map/MapComponent.tsx`: Encapsulates all map logic (MapLibre instance, sources, layers).
    -   `src/components/Sidebar.tsx`: Handles the UI overlay (layer toggles, tools).
    -   `src/App.tsx`: Layout container.
-   **State Management:** Currently using local component state (React `useState`). For a larger app, I would use Zustand or Context API to share state (e.g., drawn AOIs) between the Map and Sidebar.

## Performance Considerations

**Handling 1000s of Points/Polygons:**
-   **WebGL Rendering:** By using MapLibre, all vector data (AOIs) is rendered on the GPU. This allows rendering tens of thousands of features with 60fps performance, whereas SVG/DOM-based libraries would choke.
-   **GeoJSON Source:** Features will be managed as a GeoJSON source. MapLibre efficiently tiles and renders this data.
-   **Future Optimizations:**
    -   **Clustering:** For points, enable clustering on the source.
    -   **Tiling:** If the dataset grows to millions, serve vector tiles (MVT) instead of GeoJSON.

## Testing Strategy

**Tools:** Playwright

**Approach:**
-   **End-to-End (E2E) Testing:** Focus on the user journey.
    -   Verify the app loads.
    -   Verify the map container initializes (WebGL context).
    -   Verify UI elements (Sidebar, Layer Toggles) are visible and interactive.
-   **Why Playwright?** It reliably tests the actual browser rendering, which is crucial for a map application where canvas interactions are key.

**With more time:**
-   I would add unit tests (Vitest) for utility functions (e.g., coordinate formatting, area calculation).
-   I would add visual regression testing to catch styling regressions.

## Tradeoffs Made

-   **WMS Configuration:** I used a standard configuration for the NRW DOP WMS. In a real scenario, I would implement better error handling for tile loading failures and capability parsing.
-   **State Management:** Kept it simple with prop drilling/local state for this scope. A global store would be better for complex interactions.
-   **Drawing Tools:** (If implemented) I might use a basic implementation or a library wrapper. A custom drawing mode in MapLibre offers more control but takes longer to build.

## Production Readiness

To make this production-ready, I would:
1.  **CI/CD:** Set up GitHub Actions to run tests and linting on PRs.
2.  **Error Boundary:** Add a React Error Boundary to catch map crashes.
3.  **Accessibility:** Ensure all map controls are keyboard navigable and have ARIA labels.
4.  **Env Variables:** Move the WMS URL and other config to `.env` files.
5.  **Docker:** Add a Dockerfile for containerized deployment.

## Time Spent

-   **Planning & Setup:** ~15 mins
-   **Implementation (Map & UI):** ~30 mins
-   **Testing & Documentation:** ~15 mins
