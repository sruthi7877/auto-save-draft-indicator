# Auto-Save Draft Indicator

This project is a responsive, accessible, and user-friendly draft editor built using React.js. It simulates auto-saving functionality with clear visual feedback for different save states such as "Saving", "Saved", and "Error". The application is focused purely on front-end development without backend/API integration and includes additional UX features such as theme toggling, toast notifications, and customizable auto-save intervals.

---

## Features

### Core Functionality
- **Draft Editor UI**: A textarea for users to write their drafts.
- **Auto-Save**: Automatically triggers a simulated save after a delay once the user stops typing.
- **Visual Save Indicator**: Displays "Saving...", "Saved", or "Error saving" messages with subtle animations and status icons.
- **Manual Save Button**: Allows users to manually trigger a save at any time.
- **Error Simulation and Retry**: Randomly simulates save errors and provides a retry option.
- **Accessible UI**: Implements ARIA labels and full keyboard navigation support.

### Bonus Features
- **Dark/Light Mode Toggle**: Allows users to switch between light and dark UI themes.
- **Save Timestamp**: Displays the last successfully saved time.
- **Custom Auto-Save Interval**: Users can choose between 2s, 5s, and 10s delays.
- **Responsive Design**: Fully responsive and mobile-friendly layout.
- **Toast Notifications**: Brief, auto-dismissing messages indicating save success or failure.
- **Pause/Resume Auto-Save**: Users can pause and resume the auto-save functionality as needed.
- **LocalStorage Persistence**: Retains draft content, theme, and preferences across page reloads.

---

## Technologies Used

- React.js (with functional components and hooks)
- JavaScript (ES6+)
- CSS (custom styling and media queries)
- LocalStorage for persistence
- No backend/API integration (save simulated with timeouts and randomization)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sruthi7877/auto-save-draft-indicator.git
cd auto-save-draft-indicator
```
2.Install dependencies:

```bash
npm install
```

3.Run the development server:
```bash
npm run dev
```
Open your browser and visit:
http://localhost:5173
This project uses Vite for fast development and builds.
