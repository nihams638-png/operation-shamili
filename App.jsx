import { useState, useEffect } from 'react';

export default function App() {
  const [step, setStep] = useState(-1);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setStep(0), 3000);
    return () => clearTimeout(t);
  }, []);

  const check = () => {
    const a = answer.trim().toLowerCase();
    if (step === 0 && (a === 'orange' || a === 'yellow')) setStep(1);
    else if (step === 2 && a.includes('mere liye tum kaafi ho')) setStep(3);
    else if (step === 4 && a.includes('great northern')) setStep(5);
    else if (step === 5 && (a.includes('gepps cross') || a.includes('geeps cross'))) setStep(6);
    else setError('ACCESS DENIED. Nice try, Agent 😌');
    setAnswer('');
  };

  const shellStyle = {
    minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
    background:'linear-gradient(135deg,#000,#0a0f0a,#052e2b)', color:'white', padding:'20px'
  };

  const cardStyle = {
    width:'100%', maxWidth:'800px', background:'rgba(0,0,0,0.75)', border:'1px solid #34d399',
    borderRadius:'28px', padding:'40px', textAlign:'center', boxShadow:'0 20px 50px rgba(0,0,0,0.5)'
  };

  const btnStyle = {
    padding:'16px 22px', borderRadius:'16px', border:'none', cursor:'pointer',
    background:'#10b981', color:'black', fontWeight:'bold', fontSize:'16px'
  };

  const input = <input value={answer} onChange={(e)=>{setAnswer(e.target.value);setError('')}} style={{padding:'14px', width:'80%', maxWidth:'350px', borderRadius:'12px', margin:'12px'}} />;

  const Screen = ({title, subtitle, children}) => (
    <div style={shellStyle}>
      <div style={cardStyle}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
        {error && <p style={{color:'#f87171'}}>{error}</p>}
      </div>
    </div>
  );

  if(step===-1) return <div style={{...shellStyle,fontFamily:'monospace',fontSize:'28px',textAlign:'center'}}>ACCESSING CENTRAL COMMAND...<br/>DECRYPTING FILES...<br/>LOCATING AGENT SHAMILI...</div>;
  if(step===0) return <Screen title="🔐 OPERATION SHAMILI" subtitle="Agent Shamili, identity verification required.">{input}<br/><button style={btnStyle} onClick={check}>VERIFY</button></Screen>;
  if(step===1) return <Screen title="CHOOSE YOUR FIRST MISSION" subtitle="Pick your classified beginning"><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}><button style={btnStyle} onClick={()=>{setSelected('Hot Chocolate Morning');setStep(2)}}>☕ Hot Chocolate Morning</button><button style={btnStyle} onClick={()=>{setSelected('Relive Childhood Activity');setStep(2)}}>🧸 Childhood Activity</button></div></Screen>;
  if(step===2) return <Screen title="MISSION COMPLETE" subtitle={`Selected: ${selected}`}><p>What song did I dedicate to you?</p>{input}<br/><button style={btnStyle} onClick={check}>UNLOCK LUNCH</button></Screen>;
  if(step===3) return <Screen title="🍽️ LUNCH PROTOCOL" subtitle="Choose fuel strategy"><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}><button style={btnStyle} onClick={()=>setStep(4)}>Unlimited Buffet</button><button style={btnStyle} onClick={()=>setStep(4)}>Limited but Delicious</button></div></Screen>;
  if(step===4) return <Screen title="SECURITY CHECK" subtitle="Memory authentication"><p>First beer we had together?</p>{input}<br/><button style={btnStyle} onClick={check}>VERIFY</button></Screen>;
  if(step===5) return <Screen title="TARGET LOCATION" subtitle="Guess the suburb">{input}<br/><button style={btnStyle} onClick={check}>SCAN</button></Screen>;
  if(step===6) return <Screen title="🎯 TARGET ACQUIRED" subtitle="Mission unlocked"><h2>KARTMANIA — LASER MISSION 🔫</h2><button style={btnStyle} onClick={()=>setStep(7)}>CONTINUE</button></Screen>;
  if(step===7) return <Screen title="EXTRACTION POINT" subtitle="Choose debrief location"><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}><button style={btnStyle} onClick={()=>setError('ERROR 404: LOCATION COMPROMISED 💀')}>🍷 My Place</button><button style={btnStyle} onClick={()=>setStep(8)}>🍸 Your Place</button></div></Screen>;
  if(step===8) return <Screen title="💖 FINAL EMOTIONAL DEBRIEF" subtitle="All tasks mandatory"><p>🎤 Sing a song</p><p>💌 Talk about friendship</p><p>❤️ Tell me why I'm amazing</p><button style={btnStyle} onClick={()=>setStep(9)}>COMPLETE</button></Screen>;
  return <Screen title="MISSION COMPLETE, AGENT SHAMILI 💖" subtitle="Friendship upgraded to elite status."><p>END TRANSMISSION ✨</p></Screen>;
}
