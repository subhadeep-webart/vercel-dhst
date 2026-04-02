
import styles from "./gradientwrapper.module.css"

const GradientWrapper = ({ children, className, id }) => {
  return (
    <section id={id} className={`${styles.gradient_wrapper_container} ${className || ""}`}>
      {children}
    </section>
  )
}

export default GradientWrapper