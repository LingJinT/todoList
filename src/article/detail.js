import React from 'react';

function ArticleDetail(props) {
    return (
        <h3>我是指南{props.match.params.id}</h3>
    )
}

export default ArticleDetail