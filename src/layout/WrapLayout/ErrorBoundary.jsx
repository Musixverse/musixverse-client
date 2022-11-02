export default function ErrorBoundary({ children, error, errorInfo }) {
	if (error) {
		console.error(error);
	}

	if (errorInfo) {
		console.error(errorInfo);
	}

	return children;
}
