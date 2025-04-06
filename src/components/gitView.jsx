import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; // For rendering Markdown
import remarkGfm from 'remark-gfm';       // For GitHub Flavored Markdown

function AbhiGitView() {
    const [readmeContent, setReadmeContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReadme = async () => {
            try {
                const response = await fetch(
                    'https://raw.githubusercontent.com/ag01portfolio/candy_crush/main/README.md'
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const text = await response.text();
                setReadmeContent(text);
                setLoading(false);
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchReadme();
    }, []);

    if (loading) {
        return <div>Loading README...</div>;
    }

    if (error) {
        return <div>Error loading README: {error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <p style={{ color: " rgba(243, 14, 224, 0.87) ", fontSize: 20 }}>Abhi's Git README file</p>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
        </div>
    );
}

export default AbhiGitView;