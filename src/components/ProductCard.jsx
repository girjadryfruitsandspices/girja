import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';

export default function ProductCard({
  title = 'Organic Product',
  category = 'Spices',
  description = 'Freshly sourced high quality pure grade ingredients.',
  price = '₹299',
  weight = '250g',
  rating = 4.9,
  iconEmoji = '🌿'
}) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <span style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.1))' }}>
          {iconEmoji}
        </span>
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          borderRadius: 'var(--radius-full)',
          padding: '4px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.78rem',
          fontWeight: 700,
          color: '#c25e19'
        }}>
          <Star size={13} fill="#d99a26" color="#d99a26" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="product-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="product-category">{category}</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>{weight}</span>
        </div>
        
        <h3 className="product-name">{title}</h3>
        <p className="product-desc">{description}</p>

        <div className="product-meta">
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block' }}>Starting from</span>
            <span className="product-price">{price}</span>
          </div>

          <Link href="/contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <ShoppingBag size={14} />
            <span>Order</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
