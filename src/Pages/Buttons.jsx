// src/pages/Buttons.jsx
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiCopy, FiCheck } from 'react-icons/fi';

const Buttons = () => {
  const [copied, setCopied] = useState(null);

  // Function to copy text to clipboard
  const copyToClipboard = async (text, buttonId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(buttonId);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Press Ctrl+C to copy the code');
    }
  };

  // Button component with copy feature
  const ButtonCard = ({ buttonClass, buttonText, codeString, buttonId, icon }) => {
    const buttonPreview = icon ? (
      <button className={buttonClass}>
        <span style={{ marginRight: 'var(--spacing-2)' }}>{icon}</span>
        {buttonText}
      </button>
    ) : (
      <button className={buttonClass}>
        {buttonText}
      </button>
    );

    return (
      <div className="button-demo-card" style={{
        border: '1px solid var(--gray-200)',
        borderRadius: 'var(--radius)',
        padding: 'var(--spacing-6)',
        background: 'var(--white)',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        {/* Button Preview */}
        <div style={{ marginBottom: 'var(--spacing-4)' }}>
          {buttonPreview}
        </div>

        {/* Code Display */}
        <div style={{
          background: 'var(--gray-100)',
          padding: 'var(--spacing-2) var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '12px',
          fontFamily: 'Monaco, monospace',
          color: 'var(--text-light)',
          marginBottom: 'var(--spacing-3)',
          wordBreak: 'break-all',
          textAlign: 'left',
          overflowX: 'auto'
        }}>
          <code>{codeString}</code>
        </div>

        {/* Copy Button */}
        <button
          onClick={() => copyToClipboard(codeString, buttonId)}
          style={{
            background: copied === buttonId ? 'var(--secondary)' : 'var(--gray-200)',
            color: copied === buttonId ? 'white' : 'var(--text)',
            border: 'none',
            padding: 'var(--spacing-1) var(--spacing-3)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-1)'
          }}
        >
          {copied === buttonId ? (
            <>
              <FiCheck size={12} /> Copied!
            </>
          ) : (
            <>
              <FiCopy size={12} /> Copy Code
            </>
          )}
        </button>
      </div>
    );
  };

  // Button data arrays
  const primaryButtons = [
    { class: 'btn btn-primary', text: 'Primary', code: '<button class="btn btn-primary">Primary</button>', id: 'primary' },
    { class: 'btn btn-secondary', text: 'Secondary', code: '<button class="btn btn-secondary">Secondary</button>', id: 'secondary' },
    { class: 'btn btn-dark', text: 'Dark', code: '<button class="btn btn-dark">Dark</button>', id: 'dark' },
    { class: 'btn btn-light', text: 'Light', code: '<button class="btn btn-light">Light</button>', id: 'light' },
  ];

  const outlineButtons = [
    { class: 'btn btn-outline', text: 'Outline', code: '<button class="btn btn-outline">Outline</button>', id: 'outline' },
    { class: 'btn btn-outline-dark', text: 'Outline Dark', code: '<button class="btn btn-outline-dark">Outline Dark</button>', id: 'outline-dark' },
  ];

  const textButtons = [
    { class: 'btn btn-text', text: 'Text Button', code: '<button class="btn btn-text">Text Button</button>', id: 'text' },
    { class: 'btn btn-text-dark', text: 'Text Button Dark', code: '<button class="btn btn-text-dark">Text Button Dark</button>', id: 'text-dark' },
  ];

  const disabledButtons = [
    { class: 'btn btn-primary', text: 'Disabled', code: '<button class="btn btn-primary" disabled>Disabled</button>', id: 'disabled-primary', disabled: true },
    { class: 'btn btn-outline', text: 'Disabled Outline', code: '<button class="btn btn-outline" disabled>Disabled Outline</button>', id: 'disabled-outline', disabled: true },
  ];

  const sizeButtons = [
    { class: 'btn btn-primary btn-sm', text: 'Small', code: '<button class="btn btn-primary btn-sm">Small</button>', id: 'size-small' },
    { class: 'btn btn-primary', text: 'Default', code: '<button class="btn btn-primary">Default</button>', id: 'size-default' },
    { class: 'btn btn-primary btn-lg', text: 'Large', code: '<button class="btn btn-primary btn-lg">Large</button>', id: 'size-large' },
  ];

  const iconButtons = [
    { class: 'btn btn-primary', text: 'Search', code: '<button class="btn btn-primary"><FiSearch /> Search</button>', id: 'icon-search', icon: <FiSearch size={14} /> },
    { class: 'btn btn-secondary', text: 'Add to Cart', code: '<button class="btn btn-secondary"><FiShoppingCart /> Add to Cart</button>', id: 'icon-cart', icon: <FiShoppingCart size={14} /> },
    { class: 'btn btn-outline', text: 'Like', code: '<button class="btn btn-outline"><FiHeart /> Like</button>', id: 'icon-like', icon: <FiHeart size={14} /> },
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Buttons Component
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Click on any "Copy Code" button to copy the HTML class code to your clipboard
        </p>
      </div>

      {/* Primary Buttons Section */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>Primary Buttons</h4>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {primaryButtons.map((btn, idx) => (
            <div key={idx} style={{ gridColumn: 'span 3' }}>
              <ButtonCard
                buttonClass={btn.class}
                buttonText={btn.text}
                codeString={btn.code}
                buttonId={btn.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Outline Buttons Section */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>Outline Buttons</h4>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {outlineButtons.map((btn, idx) => (
            <div key={idx} style={{ gridColumn: 'span 6' }}>
              <ButtonCard
                buttonClass={btn.class}
                buttonText={btn.text}
                codeString={btn.code}
                buttonId={btn.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Buttons Section */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>Text Buttons</h4>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {textButtons.map((btn, idx) => (
            <div key={idx} style={{ gridColumn: 'span 6' }}>
              <ButtonCard
                buttonClass={btn.class}
                buttonText={btn.text}
                codeString={btn.code}
                buttonId={btn.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Disabled Buttons Section */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>Disabled State</h4>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {disabledButtons.map((btn, idx) => (
            <div key={idx} style={{ gridColumn: 'span 6' }}>
              <ButtonCard
                buttonClass={btn.class}
                buttonText={btn.text}
                codeString={btn.code}
                buttonId={btn.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button Sizes Section */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>Button Sizes</h4>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {sizeButtons.map((btn, idx) => (
            <div key={idx} style={{ gridColumn: 'span 4' }}>
              <ButtonCard
                buttonClass={btn.class}
                buttonText={btn.text}
                codeString={btn.code}
                buttonId={btn.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Icon Buttons Section */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>With Icons</h4>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {iconButtons.map((btn, idx) => (
            <div key={idx} style={{ gridColumn: 'span 4' }}>
              <ButtonCard
                buttonClass={btn.class}
                buttonText={btn.text}
                codeString={btn.code}
                buttonId={btn.id}
                icon={btn.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buttons;