import React, {useContext} from 'react';
import Link from 'next/link';

const topics = [
    {name: 'Introduction', slug: 'intro'},
    {name: 'Test', slug: 'test'}
]

const Header = () => {
  return (
    <div className = 'Header'>
        <div className = 'Header-layout'>
            <div className = 'Header-link'>
                <Link href = '/'>
                    <span className = 'Header-title'>
                        Thoughts & Musings
                    </span>
                </Link>
            </div>
            <div className = 'Header-nav'>
                {topics.map((topic) => (
                    <Link key = {topic.slug} href = {`/topic/${topic.slug}`}>
                        <span className = 'Header-nav-items'>
                            {topic.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Header