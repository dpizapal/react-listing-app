import React from 'react'
import './ListingDetail.css'

export default function ListingDetail() {
  return (
    <div className='listing-detail'>
      <div className='listing-detail-content'>
        <img className='listing-detail-img' alt='img' src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        <h1 className='listing-detail-title'>
          Awesome Property
          <div className='listing-detail-action'>
          <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
          <i class="listing-detail-action-icon fa-solid fa-trash-can"></i>
          </div>
          </h1>
          <div className='listing-detail-meta-info'>
            <span className='listing-detail-author'>Author - <strong>David Pizarro</strong></span>
            <span className='listing-detail-time'>1 day ago</span>
          </div>
          <p className='listing-detail-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sit amet felis vel rhoncus. Suspendisse nisi lectus, dignissim eget eros eget, faucibus pretium lorem. Fusce ac quam a risus cursus sagittis. Morbi id tempor tortor, ac aliquet justo. Phasellus hendrerit ipsum vitae fermentum faucibus. Vivamus efficitur leo nec neque iaculis, vitae mattis quam tristique. Cras luctus faucibus nibh, faucibus scelerisque nulla consectetur ut. Curabitur est nisl, vestibulum sit amet hendrerit vitae, accumsan eu lacus. Vestibulum vitae tellus dictum, viverra lectus sit amet, facilisis neque. In non maximus nisl. Donec a tortor eu diam egestas sodales sit amet eu libero. Vivamus fringilla mauris eget turpis elementum, vel ullamcorper lorem pretium. Proin vitae felis et nisi lacinia hendrerit in id odio.

Nam venenatis libero a sapien pretium mattis. Phasellus commodo ut ligula vel rutrum. Donec vitae dui quis ipsum bibendum finibus porttitor eget ipsum. In odio nisi, sodales hendrerit magna eget, accumsan interdum lacus. Pellentesque sed tristique felis, a consequat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et massa ac metus vehicula fringilla. Mauris scelerisque augue ipsum, at aliquam odio interdum ac.

Praesent accumsan arcu ut libero rutrum vulputate. Sed at rutrum urna, eget sagittis nisi. Nunc non mi odio. Praesent nec eleifend augue, ut auctor tortor. Nullam elit velit, fermentum id molestie sit amet, sagittis a enim. Fusce bibendum lectus sed ligula pulvinar, ac hendrerit ligula viverra. Nam suscipit tincidunt pretium. Duis ut ligula posuere, suscipit enim vitae, dictum mauris.

Nulla non dui nec massa lacinia mattis ac id odio. In ac nulla elementum, ullamcorper nulla eleifend, condimentum magna. Phasellus posuere blandit lacus et vehicula. Donec venenatis magna ipsum, nec consequat lectus semper non. Duis risus sem, pulvinar eu urna vel, tempor blandit risus. Donec metus nunc, tincidunt ac orci vitae, blandit sodales ante. Proin scelerisque nunc ut metus aliquam fringilla. Nullam nec dignissim urna, in lacinia elit. Nunc et rhoncus leo. Nulla malesuada varius velit, nec efficitur purus lacinia a.
          </p>
      </div>
    </div>
  )
}
