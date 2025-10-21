import { create } from 'zustand';

const useFilterStore = create((set, get) => ({
  items: [],
  filteredItems: [],
  selectedTags: [],
  searchInput: '',
  suggestions: [],
  allTags: [],
  
  setItems: (items) => {
    const allTags = [...new Set(items.flatMap(item => item.tags || []))];
    set({ items, filteredItems: items, allTags });
  },
  
  setSearchInput: (input) => {
    const { allTags, selectedTags } = get();
    
    if (input.trim() === '') {
      set({ searchInput: input, suggestions: [] });
      return;
    }
    
    const lowerInput = input.toLowerCase();
    const filteredSuggestions = allTags.filter(tag => 
      !selectedTags.includes(tag) && // Avoid showing already-selected tags
      tag.toLowerCase().startsWith(lowerInput)
    );
    
    set({ searchInput: input, suggestions: filteredSuggestions });
  },
  
  addTag: (tag) => {
    const { selectedTags, items } = get();
    
    if (!tag || selectedTags.includes(tag)) {
      set({ searchInput: '', suggestions: [] });
      return;
    }
    
    const newSelectedTags = [...selectedTags, tag];
    const filteredItems = items.filter(item =>
      newSelectedTags.every(t => item.tags?.includes(t))
    );
    
    // Batching updates in single set() call
    set({ 
      selectedTags: newSelectedTags,
      filteredItems,
      searchInput: '', 
      suggestions: [] 
    });
  },
  
  removeTag: (tagToRemove) => {
    const { selectedTags, items } = get();
    const newSelectedTags = selectedTags.filter(tag => tag !== tagToRemove);
    
    const filteredItems = newSelectedTags.length === 0 
      ? items 
      : items.filter(item => newSelectedTags.every(t => item.tags?.includes(t)));
    
    set({ selectedTags: newSelectedTags, filteredItems });
  }
}));

export default useFilterStore;
