import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();
  
  const defaultPlaceholder = placeholder || t('search.placeholder');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-md mx-auto space-x-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={defaultPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 bg-background border-border focus:ring-primary focus:border-primary"
        />
      </div>
      <Button
        onClick={handleSearch}
        className="bg-gradient-primary hover:opacity-90 shadow-button"
      >
        {t('search.button')}
      </Button>
    </div>
  );
};

export default SearchBar;