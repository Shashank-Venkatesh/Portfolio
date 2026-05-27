import { useEffect, useMemo, useState } from 'react'

const defaultRoles = [
  'Fullstack Developer',
  'MERN Stack Developer',
  'React Developer',
  'Backend Explorer',
]

function RoleRotator({ roles = defaultRoles, intervalMs = 3200 }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const roleList = useMemo(() => roles, [roles])

  useEffect(() => {
    if (!roleList.length) return undefined
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roleList.length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [intervalMs, roleList.length])

  const activeRole = roleList[roleIndex] ?? ''

  return (
    <div className="role-rotator" key={roleIndex}>
      <span>{activeRole}</span>
      <span className="cursor-blink" aria-hidden="true" />
    </div>
  )
}

export default RoleRotator
