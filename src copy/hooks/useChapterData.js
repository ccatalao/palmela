import { useState, useEffect } from 'react';

export const useChapterData = (chapterId) => {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        setLoading(true);
        // You can switch this to fetch from an API endpoint later
        const response = await import('../data/chapters.json');
        const chapterData = response.chapters[chapterId];
        
        if (!chapterData) {
          throw new Error('Chapter not found');
        }

        setChapter(chapterData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapterData();
  }, [chapterId]);

  return { chapter, loading, error };
}; 