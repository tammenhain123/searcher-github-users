import React, { useState, useEffect, useRef } from "react"

import { useParams } from 'react-router-dom';

import { PayloadProps } from "../../store/ducks/history"

interface AddSearchProps {
  saveSearchEvent: (searchEvent: PayloadProps) => void
}

interface ParamsProps {
  user?: string;
}

export const AddSearchEvent: React.FC<AddSearchProps> = ({ saveSearchEvent }) => {
  const params = useParams<ParamsProps>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [searchEvent, setSearchEvent] = useState<PayloadProps>({ value: params?.user } as PayloadProps);

  const handleSearchEventData = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchEvent({
      ...searchEvent,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewSearchEvent = (e: React.FormEvent) => {
    e.preventDefault()
    saveSearchEvent(searchEvent)
  }

  useEffect(() => {
    if (params?.user) {
      buttonRef.current?.click();
    }
  }, [params?.user]);

  return (
    <form onSubmit={addNewSearchEvent}>
      <input
        type="text"
        id="value"
        placeholder="Name"
        onChange={handleSearchEventData}
        defaultValue={params?.user}
      />

      <button ref={buttonRef} type="submit">
        Search
      </button>
      {}
    </form>

  )
}
