const FullVideo = (data) => {
  return (
    <div className="w-full home-video-h border">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/_9VUPq3SxOc"
        title="Share your brand story by adding a video to your store"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-3xl"
      ></iframe>
    </div>
  );
};
export default FullVideo;
