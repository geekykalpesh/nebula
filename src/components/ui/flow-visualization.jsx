"use client";
import React, { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node Component
const ImageNode = ({ data }) => {
  return (
    <div className="relative group rounded-xl bg-black/50 border border-white/10 p-2 w-40 hover:border-blue-500/50 transition-colors">
       {/* Handles */}
      {data.type === 'source' ? (
        <Handle
          type="source"
          position={Position.Right}
          className="!bg-blue-500 !w-3 !h-3 !border-2 !border-black -right-4"
        />
      ) : (
        <Handle
          type="target"
          position={Position.Left}
          className="!bg-purple-500 !w-3 !h-3 !border-2 !border-black -left-4"
        />
      )}

      {/* Content */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center px-1">
             <span className="text-[10px] text-slate-300 font-medium truncate max-w-[70%]">
              {data.label}
             </span>
             {data.tag && (
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">
                  {data.tag}
                </span>
             )}
        </div>
        
        <div className="aspect-video w-full rounded overflow-hidden relative">
           <img 
              src={data.image} 
              alt={data.label} 
              className="w-full h-full object-cover block"
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

const initialNodes = [
  {
    id: '1',
    type: 'imageNode',
    position: { x: 0, y: 180 },
    data: { 
      label: 'Input Source', 
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
      type: 'source'
    },
  },
  {
    id: '2',
    type: 'imageNode',
    position: { x: 400, y: 0 },
    data: { 
      label: 'City Variation', 
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop',
      tag: 'V1',
      type: 'target'
    },
  },
  {
    id: '3',
    type: 'imageNode',
    position: { x: 400, y: 180 },
    data: { 
      label: 'Robot Variation', 
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      tag: 'V2',
      type: 'target'
    },
  },
  {
    id: '4',
    type: 'imageNode',
    position: { x: 400, y: 360 },
    data: { 
      label: 'Winter Variation', 
      image: 'https://images.unsplash.com/photo-1547754980-3df97fed72a8?w=400&h=250&fit=crop',
      tag: 'V3',
      type: 'target'
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#9ca3af', strokeWidth: 2 } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#9ca3af', strokeWidth: 2 } },
  { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#9ca3af', strokeWidth: 2 } },
];

export const FlowVisualization = ({ className = "" }) => {
  const nodeTypes = useMemo(() => ({ imageNode: ImageNode }), []);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className={`w-full h-full bg-[#050505] relative ${className}`}>
       <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.5}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
        preventScrolling={false}
        className="touch-none"
      >
        <Background color="#222" gap={24} size={1.5} variant="dots" />
      </ReactFlow>
    </div>
  );
};
