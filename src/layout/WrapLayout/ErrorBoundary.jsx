export default function ErrorBoundary({ children, error, errorInfo }) {
	if (error) {
		console.error("ErrorBoundary:", error);
	}

	if (errorInfo) {
		console.error("ErrorBoundary:", errorInfo);
	}

	return children;
}
