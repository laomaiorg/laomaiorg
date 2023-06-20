---
title: "搜索"
date: 2023-01-10
slug: "search"
layout: page
toc: false
comments: false
menu:
    main: 
        weight: -80
        pre: a
---

<link href="/css/pagefind-ui.css" rel="stylesheet">
<script src="/_pagefind/pagefind-ui.js" type="text/javascript"></script>

<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search" });
    });
</script>