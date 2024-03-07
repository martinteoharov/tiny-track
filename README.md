# Tiny-Track

Tiny-Track is a minimal, open-source analytics solution designed to track user engagement on websites with privacy in mind. The project is structured as a monorepo containing three main components: the Tracker script, the Dashboard application, and the Server backend.

## Project Structure

- **`/common`**: Shared TypeScript definitions used across the project.
- **`/dashboard`**: A React application that provides a user interface for viewing and analyzing tracked data. Built with Vite and TypeScript.
- **`/server`**: The backend service responsible for collecting data from the Tracker and serving it to the Dashboard.
- **`/tracker`**: A lightweight TypeScript library injected into web pages to track user interactions such as page views, click events, and scroll depth.

## Getting Started

To get started with Tiny-Track, clone this repository to your local machine:

```bash
git clone https://yourrepositoryurl/tiny-track.git
cd tiny-track
```
