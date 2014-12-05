---
layout: post
title: "一篇文章和图片"
excerpt: "Examples and code for displaying images in posts."
categories: articles
tags: [images]
comments: true
share: true
---

## 图像/视频

<figure>
	<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg" alt="image"></a>
	<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>

Apply the `half` class like so to display two images side by side that share the same caption.

{% highlight html %}
<figure class="half">
	<img src="/images/image-filename-1.jpg" alt="image">
	<img src="/images/image-filename-2.jpg" alt="image">
	<figcaption>Caption describing these two images.</figcaption>
</figure>
{% endhighlight %}

And you'll get something that looks like this:

<figure class="half">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<img src="http://placehold.it/600x300.jpg" alt="image">
	<img src="http://placehold.it/600x300.jpg" alt="image">
	<figcaption>Two images.</figcaption>
</figure>

### Three Up


{% highlight html %}
<figure class="third">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<figcaption>Caption describing these three images.</figcaption>
</figure>
{% endhighlight %}


<figure class="third">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<figcaption>Three images.</figcaption>
</figure>