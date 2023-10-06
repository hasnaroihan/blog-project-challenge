'use client';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Input, InputAdornment } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({ query }) {
    const [value, setValue] = useState('');
    const router = useRouter();
    const handleValueChange = (e) => {
        setValue(e.target.value);
    };
    const handleKeyEnter = (e) => {
        if (e.keyCode == 13) {
            router.push(`/users/search?query=${value}`);
        }
    };
    return (
        <Input
            className="self-start"
            placeholder={query ? `result:${query}` : 'search user'}
            startAdornment={
                <InputAdornment position="start">
                    <SearchRoundedIcon />
                </InputAdornment>
            }
            onChange={handleValueChange}
            onKeyUp={handleKeyEnter}
        />
    );
}
