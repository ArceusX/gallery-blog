import React, { useEffect, useState, useCallback } from 'react';
import useLanguageStore from '../store/languageStore';
import uiTranslations from '@content/uiTranslations';
import useFilterStore from '../store/filterStore';
import './css/TagFilter.css';

/**
 * A component that provides a tag-based filterin+g UI.
 * Includes a search input with autocomplete suggestions and a list of selected tags.
 *
 * @param {object[]} items - The items to be filtered.
 * @returns {JSX.Element} The rendered tag filter component.
 */
const TagFilter = ({ items }) => {
  const language = useLanguageStore(state => state.language);
  const translations = uiTranslations[language.code] || uiTranslations.en;
  
  const { searchInput, selectedTags, suggestions, addTag, removeTag, setSearchInput, setItems } = useFilterStore();
  const [localInput, setLocalInput] = useState('');

  useEffect(() => {
    setItems(items);
  }, [items]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchInput(localInput);
    }, 200);
    return () => clearTimeout(handler);
  }, [localInput]); 

  const handleInputChange = (e) => {
    setLocalInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      addTag(suggestions[0]);
      setLocalInput('');
    }
  };

  return (
    <>
      <div className="tag-filter nav-section">
        <label htmlFor="tag-search" className="nav-label">
          {translations.cardNavbar.filterTags}
        </label>
        <div className="search-container">
          <input
            id="tag-search"
            type="text"
            value={localInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="nav-select nav-input"
            placeholder={translations.cardNavbar.tagSearchPlaceholder}
          />
          {suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map(tag => (
                <div
                  key={tag}
                  className="suggestion-item"
                  onClick={() => {
                    addTag(tag);
                    setLocalInput('');
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="nav-section">
        <div className="selected-tags">
          <label className="nav-label">&nbsp;</label>
          {selectedTags.map(tag => (
            <div
              key={tag}
              className="selected-tag"
              onClick={() => removeTag(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(TagFilter);