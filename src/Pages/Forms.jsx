// src/pages/Forms.jsx
import  { useState } from 'react';
import { FiCopy, FiCheck, FiSearch, FiMapPin } from 'react-icons/fi';

// ✅ COMPONENT BAHAR DEFINE KIYA (ERROR FIX)
const FormDemoCard = ({ title, children, code, id, copied, onCopy }) => {
  return (
    <div className="form-demo-card" style={{
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius)',
      padding: 'var(--spacing-6)',
      background: 'var(--white)',
      transition: 'all 0.3s ease'
    }}>
      <h5 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>{title}</h5>
      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        {children}
      </div>
      <div style={{
        background: 'var(--gray-100)',
        padding: 'var(--spacing-2) var(--spacing-3)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '12px',
        fontFamily: 'Monaco, monospace',
        marginBottom: 'var(--spacing-3)',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </div>
      <button
        onClick={() => onCopy(code, id)}
        style={{
          background: copied === id ? 'var(--secondary)' : 'var(--gray-200)',
          color: copied === id ? 'white' : 'var(--text)',
          border: 'none',
          padding: 'var(--spacing-1) var(--spacing-3)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '12px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-1)'
        }}
      >
        {copied === id ? (
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

const Forms = () => {
  const [copied, setCopied] = useState(null);
  const [rangeValue, setRangeValue] = useState(50);
  const [switchChecked, setSwitchChecked] = useState(false);

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Form Elements
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Custom form components with copy-to-clipboard functionality. All inputs have orange focus state.
        </p>
      </div>

      <div className="form-container">
        {/* Text Inputs Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Text Inputs</h4>
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Basic Text Input"
                code='<input type="text" class="form-control" placeholder="Enter text here..." />'
                id="text-input"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <input type="text" className="form-control" placeholder="Enter text here..." />
              </FormDemoCard>
            </div>
            
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Focus State"
                code='<input type="text" class="form-control" placeholder="Enter text here..." autofocus />'
                id="focus-input"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <input type="text" className="form-control" placeholder="Enter text here..." autoFocus />
              </FormDemoCard>
            </div>
          </div>
        </div>

        {/* Input Groups Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Input Groups</h4>
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Search Input"
                code={`<div class="input-group">
  <input type="text" class="form-control" placeholder="Search..." />
  <span class="input-group-addon">🔍</span>
</div>`}
                id="search-input"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for restaurants..." />
                  <span className="input-group-addon"><FiSearch size={14} /></span>
                </div>
              </FormDemoCard>
            </div>
            
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Location Input"
                code={`<div class="input-group">
  <input type="text" class="form-control" placeholder="Location..." />
  <span class="input-group-addon">📍</span>
</div>`}
                id="location-input"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Lahore, Pakistan" />
                  <span className="input-group-addon"><FiMapPin size={14} /></span>
                </div>
              </FormDemoCard>
            </div>
          </div>
        </div>

        {/* Checkboxes Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Custom Checkboxes</h4>
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Checkbox Examples"
                code={`<label class="checkbox">
  <input type="checkbox" />
  <span class="checkmark"></span>
  Delivery Available
</label>`}
                id="checkbox-demo"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Delivery Available
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Pickup Available
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Free Cancellation
                  </label>
                </div>
              </FormDemoCard>
            </div>
            
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Checkbox Group"
                code={`<label class="checkbox">
  <input type="checkbox" />
  <span class="checkmark"></span>
  Option 1
</label>`}
                id="checkbox-group"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Breakfast (6am - 11am)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Lunch (11am - 4pm)
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Dinner (4pm - 10pm)
                  </label>
                </div>
              </FormDemoCard>
            </div>
          </div>
        </div>

        {/* Radio Buttons Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Custom Radio Buttons</h4>
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Payment Method"
                code={`<label class="radio">
  <input type="radio" name="payment" />
  <span class="radiomark"></span>
  Credit Card
</label>`}
                id="radio-demo"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <label className="radio">
                    <input type="radio" name="payment" defaultChecked />
                    <span className="radiomark"></span>
                    Credit Card
                  </label>
                  <label className="radio">
                    <input type="radio" name="payment" />
                    <span className="radiomark"></span>
                    Debit Card
                  </label>
                  <label className="radio">
                    <input type="radio" name="payment" />
                    <span className="radiomark"></span>
                    Cash on Delivery
                  </label>
                </div>
              </FormDemoCard>
            </div>
            
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Delivery Time"
                code={`<label class="radio">
  <input type="radio" name="time" />
  <span class="radiomark"></span>
  As soon as possible
</label>`}
                id="radio-time"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <label className="radio">
                    <input type="radio" name="time" defaultChecked />
                    <span className="radiomark"></span>
                    As soon as possible
                  </label>
                  <label className="radio">
                    <input type="radio" name="time" />
                    <span className="radiomark"></span>
                    Schedule for later
                  </label>
                </div>
              </FormDemoCard>
            </div>
          </div>
        </div>

        {/* Select Input Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Select Inputs</h4>
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Dropdown Select"
                code={`<select class="form-control">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>`}
                id="select-demo"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <select className="form-control">
                  <option>Select an option</option>
                  <option>Delivery Available - 11.1 km</option>
                  <option>Delivery Available - 2.3 km</option>
                  <option>Delivery Available - 4.5 km</option>
                </select>
              </FormDemoCard>
            </div>
            
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Restaurant Select"
                code={`<select class="form-control">
  <option>Choose restaurant</option>
  <option>KFC</option>
  <option>McDonald's</option>
</select>`}
                id="select-restaurant"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <select className="form-control">
                  <option>Choose a restaurant</option>
                  <option>KFC - 1.2 km away</option>
                  <option>McDonald's - 2.5 km away</option>
                  <option>Pizza Hut - 3.0 km away</option>
                  <option>Domino's - 4.1 km away</option>
                </select>
              </FormDemoCard>
            </div>
          </div>
        </div>

        {/* Textarea Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Textarea</h4>
          <FormDemoCard
            title="Message / Feedback"
            code={`<textarea class="form-textarea" rows="4" placeholder="Enter your message..."></textarea>`}
            id="textarea-demo"
            copied={copied}
            onCopy={copyToClipboard}
          >
            <textarea 
              className="form-textarea" 
              rows="4" 
              placeholder="Enter your feedback or special instructions..."
            ></textarea>
          </FormDemoCard>
        </div>

        {/* Range Slider Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Range Slider</h4>
          <FormDemoCard
            title="Price Range Selector"
            code={`<input type="range" class="form-range" min="0" max="100" value="50" />`}
            id="range-demo"
            copied={copied}
            onCopy={copyToClipboard}
          >
            <div>
              <input 
                type="range" 
                className="form-range" 
                min="0" 
                max="100" 
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
              />
              <div className="flex justify-between" style={{ marginTop: 'var(--spacing-2)' }}>
                <span className="text-small">₹0</span>
                <span className="text-small" style={{ color: 'var(--primary)' }}>₹{rangeValue * 100}</span>
                <span className="text-small">₹10000</span>
              </div>
            </div>
          </FormDemoCard>
        </div>

        {/* Switch Toggle Section */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Toggle Switch</h4>
          <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Enable Notifications"
                code={`<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>`}
                id="switch-demo"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div className="flex items-center" style={{ gap: 'var(--spacing-3)' }}>
                  <label className="switch">
                    <input type="checkbox" checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />
                    <span className="slider"></span>
                  </label>
                  <span>{switchChecked ? 'Notifications ON' : 'Notifications OFF'}</span>
                </div>
              </FormDemoCard>
            </div>
            
            <div style={{ gridColumn: 'span 6' }}>
              <FormDemoCard
                title="Dark Mode"
                code={`<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>`}
                id="switch-dark"
                copied={copied}
                onCopy={copyToClipboard}
              >
                <div className="flex items-center" style={{ gap: 'var(--spacing-3)' }}>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                  <span>Dark Mode</span>
                </div>
              </FormDemoCard>
            </div>
          </div>
        </div>

        {/* Complete Form Example */}
        <div className="form-card">
          <h4 style={{ marginBottom: 'var(--spacing-6)', fontWeight: '600' }}>Complete Registration Form</h4>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name" />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter email address" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <div className="input-group">
                <span className="input-group-addon">+92</span>
                <input type="tel" className="form-control" placeholder="300 1234567" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City</label>
                <select className="form-control">
                  <option>Select City</option>
                  <option>Lahore</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Area</label>
                <select className="form-control">
                  <option>Select Area</option>
                  <option>Gulberg</option>
                  <option>DHA</option>
                  <option>Johar Town</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Delivery Instructions</label>
              <textarea className="form-textarea" rows="3" placeholder="Any special instructions?"></textarea>
            </div>
            
            <div className="form-group">
              <label className="checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                I agree to the terms and conditions
              </label>
            </div>
            
            <div className="form-group">
              <label className="radio">
                <input type="radio" name="offers" defaultChecked />
                <span className="radiomark"></span>
                I want to receive special offers
              </label>
            </div>
            
            <button className="btn btn-primary" type="submit">Register Now</button>
          </form>
        </div>

        {/* Usage Instructions */}
        <div className="form-card" style={{ background: 'var(--gray-100)' }}>
          <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>How to Use</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <div>1️⃣ Click the "Copy Code" button on any form component</div>
            <div>2️⃣ Paste the code in your HTML/JSX file</div>
            <div>3️⃣ Make sure theme.css is imported in your project</div>
            <div style={{ 
              marginTop: 'var(--spacing-4)', 
              padding: 'var(--spacing-3)', 
              background: 'var(--white)', 
              borderRadius: 'var(--radius)',
              borderLeft: '4px solid var(--primary)'
            }}>
              <strong>Example:</strong>
              <pre style={{ marginTop: 'var(--spacing-2)', overflow: 'auto' }}>
                <code>{`import './theme.css';

function MyForm() {
  return (
    <div className="form-group">
      <label className="form-label">Email</label>
      <input type="email" className="form-control" />
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;