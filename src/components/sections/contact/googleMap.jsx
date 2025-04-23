const GoogleMap = () => {
  return (
    <div className='lg:pt-15 lg;pb-15 pb-10 pt-10 aspect-video'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d972.4038434151589!2d77.68658726955478!3d12.86810099921486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzA1LjIiTiA3N8KwNDEnMTQuMCJF!5e0!3m2!1sen!2sin!4v1745399151271!5m2!1sen!2sin'
        width='100%'
        height='100%'
        className={'w-full h-full'}
        style={{ border: 0 }}
        allowFullScreen='yes'
        loading='lazy'
        // name={'google-map'}
        title='Google Map'
        referrerPolicy='no-referrer-when-downgrade'></iframe>

      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d972.4038434151589!2d77.68658726955478!3d12.86810099921486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzA1LjIiTiA3N8KwNDEnMTQuMCJF!5e0!3m2!1sen!2sin!4v1745399151271!5m2!1sen!2sin'
        width='600'
        height='450'
        style='border:0;'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'></iframe> */}
    </div>
  );
};

export default GoogleMap;

// 12.868101, 77.687231
