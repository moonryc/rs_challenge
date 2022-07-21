import React from 'react'

interface DegreeSymbolProps {
  isMetric?: boolean
  isTemperature: boolean
}

const DegreeSymbol = ({
  isMetric = false,
  isTemperature = false,
}: DegreeSymbolProps) => {
  if (isTemperature) {
    return <span>&deg;{isMetric ? 'C' : 'F'}</span>
  }
  return <span>&deg;</span>
}

export default React.memo(DegreeSymbol)
