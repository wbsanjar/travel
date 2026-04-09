# Travel
![logo](travel.png)

[Live Demo](https://travel-grid.vercel.app/) | [GitHub Repository](https://github.com/wbsanjar/travel)

**Travel** is an all-in-one travel platform that enables users to book tickets, rent vehicles, reserve hotels, access travel guides, and select customizable travel packages seamlessly.

## Project Overview

Travel is an open-source project participating in **GirlScript Summer of Code (GSSoC) 2025**, one of India’s largest open-source programs. GSSoC encourages developers to contribute to real-world projects, fostering skill development, collaboration, and recognition through mentorship and community support.

### Project Insights

| Stars | Forks | Issues | Open PRs | Closed PRs | Languages | Contributors |
|-------|-------|--------|----------|------------|-----------|--------------|
| ![Stars]() | ![Forks]() | ![Issues]() | ![Open PRs]() | ![Closed PRs]() | ![Languages]() | ![Contributors]() |

## Getting Started

Follow these steps to set up **Travel** locally and contribute to the project.

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**
- Code editor (VS Code recommended)

### Installation

1. **Clone the Repository**

   ```bash
   git clone 
   cd Travel
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd client
   npm install
   ```

   > **Note**: If you encounter npm WARN deprecated or peer dependency errors, run:
   > ```bash
   > npm install --legacy-peer-deps
   > ```

3. **Install Backend Dependencies**

   ```bash
   cd ../server
   npm install
   ```

   > **Note**: Ensure you are in the `server` folder. If you encounter an `ENOENT: no such file or directory` error, verify the folder structure.

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd server
   npm start
   ```

   The server will run on `http://localhost:5000`.

2. **Start the Frontend**

   In a new terminal:

   ```bash
   cd client
   npm run dev
   ```

   The client will run on `http://localhost:5173`.

### Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm ERR! enoent` | Verify you are in the correct folder (`client` or `server`) before running `npm install`. |
| Port already in use | Stop other applications using the port or modify the port in `vite.config.js` or the backend server configuration. |
| Dependency errors | Run `npm install --legacy-peer-deps` for the frontend. |
| Server not starting | Ensure the `.env` file contains the correct MongoDB URI and port settings. |

## Contributing to Travel

We welcome contributions to enhance Travel. Follow these guidelines:

1. **Pick an Issue**: Select an unassigned issue from the repository or create a new one. Wait for admin approval before starting.
2. **Responsive Design**: Use Tailwind CSS to ensure responsive designs.
3. **Code Quality**: Write clean, modular code in the `src/components/` directory. Adhere to ESLint and Prettier standards.
4. **Pull Requests**: Address a specific issue, test thoroughly, and provide a clear PR description. Buggy PRs will not be merged.
5. **Communication**: Contact the project admin via:
   - **GitHub**: [wbsanjar](https://github.com/wbsanjar)
   - **LinkedIn**: [Md. Sanjar Nawaz](https://www.linkedin.com/in/sanjar-nawaz-062b14328/)

6. **Task Assignment**: Task assignments and PR reviews are conducted daily from 6:00 PM to 7:00 PM IST.

## Project Structure
[logo](grid.png)

```bash
Travel/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── .env
│   ├── README.md
├── .gitignore
├── LICENSE
├── README.md
```

## Code of Conduct

Refer to the [Code of Conduct](https://github.com/wbsanjar/travel.git) for contributing guidelines and community standards.

## Contribution Guidelines

Detailed contribution guidelines are available in the [CONTRIBUTE.md](https://github.com/wbsanjar/travel.git) file (coming soon).

## Contributors

View the full list of contributors on the [GitHub Contributors Graph](https://github.com/Adarsh-Chaubey03/TravelGrid/graphs/contributors).

## Suggestions & Feedback

Submit feedback, feature suggestions, or collaboration ideas by opening an issue or discussion on the [GitHub repository](https://github.com/wbsanjar/travel).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Adarsh-Chaubey03/TravelGrid/blob/main/LICENSE) file for details.

## Project Admin

| Name | Profile |
|------|---------|
| MD. Sanjar | [GitHub](https://github.com/wbsanjar) \| [LinkedIn](https://www.linkedin.com/in/sanjar-nawaz-062b14328/) |

## Support

If you find this project valuable, please star the repository on [GitHub](https://github.com/wbsanjar) to support its development.
