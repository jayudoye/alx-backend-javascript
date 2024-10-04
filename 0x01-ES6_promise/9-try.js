export default function guardrail(mathFunction) {
  const res = [];
  try {
    res.push(mathFunction());
  } catch (error) {
    res.push(`Error: ${error.message}`);
  } finally {
    res.push('Guardrail was processed');
  }

  return res;
}
