const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

export const chapterService = {
  async getChapter(chapterId) {
    try {
      // In development, fall back to local JSON
      if (process.env.NODE_ENV === 'development') {
        const response = await import('../data/chapters.json');
        return response.chapters[chapterId];
      }

      // In production, fetch from API
      const response = await fetch(`${API_BASE_URL}/chapters/${chapterId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch chapter data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching chapter:', error);
      throw error;
    }
  },

  async getAllChapters() {
    try {
      if (process.env.NODE_ENV === 'development') {
        const response = await import('../data/chapters.json');
        return response.chapters;
      }

      const response = await fetch(`${API_BASE_URL}/chapters`);
      if (!response.ok) {
        throw new Error('Failed to fetch chapters');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching chapters:', error);
      throw error;
    }
  }
}; 