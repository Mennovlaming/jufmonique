// Page.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Page.css';

function Page({ id }) {
  const { id: pageId } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(`https://www.kindercoachjufmonique.nl/wp-json/wp/v2/pages/${id || pageId}`);
        // const response = await fetch(`http://localhost:8899/wordpress/wp-json/wp/v2/pages/${id || pageId}`);
        if (response.ok) {
          const data = await response.json();
          setPage(data);
        } else {
          throw new Error('Fout bij het ophalen van de pagina');
        }
      } catch (error) {
        console.error('Fout bij het ophalen van de pagina:', error);
      }
    };

    fetchPage();
  }, [id, pageId]);

  if (!page) return <div>Loading...</div>;

  return (
    <main>
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}

export default Page;