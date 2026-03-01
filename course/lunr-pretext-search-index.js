var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-Textbook-2",
  "level": "1",
  "url": "ch-Textbook-2.html",
  "type": "Handout",
  "number": "",
  "title": "Daily Prep 5.4 - Eigenvalue Method",
  "body": " Daily Prep 5.4 - Eigenvalue Method   Overview  We now introduce the eigenvalue method as a powerful technique for solving linear homogeneous constant‑coefficient systems of ODEs of the form , where is a constant square matrix. Motivated by the scalar case, the method tries solutions of the form , where is a scalar and is a constant vector. Substituting this trial form into the system reduces the differential equation to the algebraic eigenvalue problem . Thus, eigenvalues are found by solving , and each eigenvector yields a corresponding solution . Since an matrix typically has eigenvalues (possibly repeated or complex), the section shows that a collection of linearly independent eigenvector solutions forms a fundamental solution set, and all solutions are linear combinations of these. The method connects linear algebra and differential equations, enabling systematic and elegant solution of multi‑dimensional linear systems.    Basic learning objectives  These are the tasks you should be able to perform with reasonable fluency when you arrive at our next class meeting. Important new vocabulary words are indicated in italics .    Recognize that the eigenvalue method applies to linear homogeneous constant‑coefficient systems .    Understand the trial solution and how substituting it leads to the eigenvalue equation .    Define eigenvalues and eigenvectors of a matrix and compute eigenvalues using .      Learn!  Complete the actions listed below.     Read  Subsection 7.4.1: Eigenvalues and eigenvectors of a matrix .     Watch  Intro to Solving a Linear System of ODEs using the Eigenvalue Method: Eigenvalues and Eigenvectors (7:17) by Mathispower4u.     Read  Subsection 7.4.2: The eigenvalue method with distinct real eigenvalues .     Watch  Solve a Linear System of ODEs using the Eigenvalue Method: Real, Distinct Eigenvalues (7:28) by Mathispower4u.    (Optional) Watch  Find Eigenvalues, Eigenvectors, and Solve a Linear System of ODEs with Constant Coefficents: Homogeneous (6:35) by Mathispower4u.    (Optional) Watch  Solve a Linear System of ODEs using the Eigenvalue Method: Real, Distinct Eigenvalues (4:08) by Mathispower4u.     Read  Subsection 7.4.3: Complex eigenvalues .     Watch  Solve a Linear System of ODEs using the Eigenvalue Method: Complex Eigenvalues (9:44) by Mathispower4u.    (Optional) Watch  Solve a Linear System of ODEs using the Eigenvalue Method: Imaginary Eigenvalues (6:38) by Mathispower4u.     Do  Subsection 7.4.4: Exercises 7.4.1, 7.4.5, 7.4.6, 7.4.7, 7.4.9, 7.4.101, 7.4.104 .      Do MyOpenMath questions from this section.     Exercises   Trial Solutions for the Eigenvalue Method   For a linear homogeneous constant‑coefficient system , what trial solution does the eigenvalue method use?         Correct. The method assumes a solution of the form .      No—the method uses exponential solutions, not linear ones.     Not in the first step. Sinusoidal behavior only appears later when eigenvalues are complex.      Obtaining the Eigenvalue Equation   After substituting into , which equation must the constants and satisfy?       Correct. The substitution leads directly to the eigenvalue equation.      No—that equation is used to find eigenvectors once is known.     No. This only holds when is a scalar matrix.      Computing Eigenvalues   To find the eigenvalues of a matrix in the system , which equation should be solved?         Correct. Eigenvalues are roots of the characteristic equation .      No. This would test whether is singular, not find eigenvalues.     This computes the nullspace, not the eigenvalues.      Computing an Eigenvalue   Let What are the eigenvalues of ?         Correct. Diagonal matrices have eigenvalues equal to their diagonal entries, consistent with solving .      No—the determinant equation does not give these roots.    only  No. A 2×2 matrix must have two eigenvalues (including repeats).      Checking an Eigenvector   Let Compute and determine the corresponding eigenvalue.           Correct. Because , the eigenvalue is . This matches the equation used in the eigenvalue method.           No. This incorrectly multiplies the matrix and vector.           No. The second component should remain zero when multiplying by this matrix.       Checking Whether a Vector is an Eigenvector   Let Compute and determine whether is an eigenvector of .       so is not an eigenvector.    Correct. Because is not a scalar multiple of , is not an eigenvector. Eigenvectors must satisfy .       so is an eigenvector with .    No. is not equal to .       , so is an eigenvector with .    No—the computation of is incorrect.       Verifying a Solution from an Eigenpair   Suppose is an eigenvalue of a constant matrix with eigenvector Which of the following is a solution of the system ?           Correct. Every eigenpair yields a solution .           No. This uses instead of .           No. Even though the vector is a scalar multiple of , the exponential must be .        Deriving the Eigenvalue Equation   Consider a linear homogeneous constant-coefficient system . Starting from the trial solution , derive the algebraic eigenvalue equation that and must satisfy. Explain each step clearly.    The trial solution used is , where is a scalar and is a constant vector. We substitute this into .  First compute the derivative:   Substitute both expressions into the differential equation:   Since is never zero, canceling it yields the purely algebraic condition:   This is exactly the eigenvalue equation. It states that must be an eigenvector of with eigenvalue . The section emphasizes this derivation as the foundation of the eigenvalue method.      Verifying an Eigenvector Solution   Let Verify that is a solution of the system .    We must check whether . Start by computing :   Compute :   Since , the vector is not an eigenvector of , and therefore is not a solution.  This exercise illustrates a key requirement: a solution of the form exists only when holds.      Constructing a General Solution from Two Eigenpairs   Suppose a system has two distinct eigenvalues and with corresponding eigenvectors Write down the general solution to the system and briefly explain why these two solutions form a fundamental set.    Since each eigenpair gives a solution , we have two independent solutions:   The general solution is the linear combination:   Because the eigenvalues and are distinct, the corresponding eigenvectors are automatically linearly independent. Hence these two solutions form a fundamental set, and every solution to the system is their linear combination, exactly as described in the theory.       Advanced learning objectives  In addition to mastering the basic objectives, here are the tasks you should be able to perform, with practice:    Solve a linear system by computing eigenvectors corresponding to each eigenvalue and forming solutions of the form .    Construct the general solution of an system by forming linear combinations of linearly independent eigenvector solutions.    Analyze repeated or complex eigenvalues and determine the structure of the solution set when the eigenvectors do not provide a full set of linearly independent solutions.     "
},
{
  "id": "mcqeigentrialsolution",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqeigentrialsolution",
  "type": "Exercise",
  "number": "1",
  "title": "Trial Solutions for the Eigenvalue Method.",
  "body": " Trial Solutions for the Eigenvalue Method   For a linear homogeneous constant‑coefficient system , what trial solution does the eigenvalue method use?         Correct. The method assumes a solution of the form .      No—the method uses exponential solutions, not linear ones.     Not in the first step. Sinusoidal behavior only appears later when eigenvalues are complex.    "
},
{
  "id": "mcqeigenvalueequation",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqeigenvalueequation",
  "type": "Exercise",
  "number": "2",
  "title": "Obtaining the Eigenvalue Equation.",
  "body": " Obtaining the Eigenvalue Equation   After substituting into , which equation must the constants and satisfy?       Correct. The substitution leads directly to the eigenvalue equation.      No—that equation is used to find eigenvectors once is known.     No. This only holds when is a scalar matrix.    "
},
{
  "id": "mcqcharacteristicequation",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqcharacteristicequation",
  "type": "Exercise",
  "number": "3",
  "title": "Computing Eigenvalues.",
  "body": " Computing Eigenvalues   To find the eigenvalues of a matrix in the system , which equation should be solved?         Correct. Eigenvalues are roots of the characteristic equation .      No. This would test whether is singular, not find eigenvalues.     This computes the nullspace, not the eigenvalues.    "
},
{
  "id": "mcqeigenvaluecomputationsmall",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqeigenvaluecomputationsmall",
  "type": "Exercise",
  "number": "4",
  "title": "Computing an Eigenvalue.",
  "body": " Computing an Eigenvalue   Let What are the eigenvalues of ?         Correct. Diagonal matrices have eigenvalues equal to their diagonal entries, consistent with solving .      No—the determinant equation does not give these roots.    only  No. A 2×2 matrix must have two eigenvalues (including repeats).    "
},
{
  "id": "mcqcheckeigenvector",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqcheckeigenvector",
  "type": "Exercise",
  "number": "5",
  "title": "Checking an Eigenvector.",
  "body": " Checking an Eigenvector   Let Compute and determine the corresponding eigenvalue.           Correct. Because , the eigenvalue is . This matches the equation used in the eigenvalue method.           No. This incorrectly multiplies the matrix and vector.           No. The second component should remain zero when multiplying by this matrix.     "
},
{
  "id": "mcqeigenvectordirection",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqeigenvectordirection",
  "type": "Exercise",
  "number": "6",
  "title": "Checking Whether a Vector is an Eigenvector.",
  "body": " Checking Whether a Vector is an Eigenvector   Let Compute and determine whether is an eigenvector of .       so is not an eigenvector.    Correct. Because is not a scalar multiple of , is not an eigenvector. Eigenvectors must satisfy .       so is an eigenvector with .    No. is not equal to .       , so is an eigenvector with .    No—the computation of is incorrect.     "
},
{
  "id": "mcqchecksolutionform",
  "level": "2",
  "url": "ch-Textbook-2.html#mcqchecksolutionform",
  "type": "Exercise",
  "number": "7",
  "title": "Verifying a Solution from an Eigenpair.",
  "body": " Verifying a Solution from an Eigenpair   Suppose is an eigenvalue of a constant matrix with eigenvector Which of the following is a solution of the system ?           Correct. Every eigenpair yields a solution .           No. This uses instead of .           No. Even though the vector is a scalar multiple of , the exponential must be .     "
},
{
  "id": "eigenmethod-open-1",
  "level": "2",
  "url": "ch-Textbook-2.html#eigenmethod-open-1",
  "type": "Exercise",
  "number": "8",
  "title": "Deriving the Eigenvalue Equation.",
  "body": " Deriving the Eigenvalue Equation   Consider a linear homogeneous constant-coefficient system . Starting from the trial solution , derive the algebraic eigenvalue equation that and must satisfy. Explain each step clearly.    The trial solution used is , where is a scalar and is a constant vector. We substitute this into .  First compute the derivative:   Substitute both expressions into the differential equation:   Since is never zero, canceling it yields the purely algebraic condition:   This is exactly the eigenvalue equation. It states that must be an eigenvector of with eigenvalue . The section emphasizes this derivation as the foundation of the eigenvalue method.   "
},
{
  "id": "eigenmethodopen2",
  "level": "2",
  "url": "ch-Textbook-2.html#eigenmethodopen2",
  "type": "Exercise",
  "number": "9",
  "title": "Verifying an Eigenvector Solution.",
  "body": " Verifying an Eigenvector Solution   Let Verify that is a solution of the system .    We must check whether . Start by computing :   Compute :   Since , the vector is not an eigenvector of , and therefore is not a solution.  This exercise illustrates a key requirement: a solution of the form exists only when holds.   "
},
{
  "id": "eigenmethodopen3",
  "level": "2",
  "url": "ch-Textbook-2.html#eigenmethodopen3",
  "type": "Exercise",
  "number": "10",
  "title": "Constructing a General Solution from Two Eigenpairs.",
  "body": " Constructing a General Solution from Two Eigenpairs   Suppose a system has two distinct eigenvalues and with corresponding eigenvectors Write down the general solution to the system and briefly explain why these two solutions form a fundamental set.    Since each eigenpair gives a solution , we have two independent solutions:   The general solution is the linear combination:   Because the eigenvalues and are distinct, the corresponding eigenvectors are automatically linearly independent. Hence these two solutions form a fundamental set, and every solution to the system is their linear combination, exactly as described in the theory.   "
},
{
  "id": "ch-Textbook-3",
  "level": "1",
  "url": "ch-Textbook-3.html",
  "type": "Handout",
  "number": "",
  "title": "Daily Prep 5.5 - Two-Dimensional Systems and their Vector Fields",
  "body": " Daily Prep 5.5 - Two-Dimensional Systems and their Vector Fields   Overview  We now use two-dimensional autonomous systems of the form and show how their qualitative behavior can be understood through vector fields in the phase plane. Each point in the plane determines a direction vector , producing a picture of how solutions move over time. Because the underlying system is linear and autonomous, equilibrium points occur where , typically the origin, and the eigenvalues and eigenvectors of determine the geometry of nearby trajectories. Solutions tangent to eigenvectors form principal solution curves, while the signs and types of eigenvalues (real, repeated, or complex) determine whether the origin behaves as a node, saddle, spiral, or center. We then illustrate how the eigenvalue method combines with vector-field intuition to classify the qualitative behavior of all solutions in the plane.    Basic learning objectives  These are the tasks you should be able to perform with reasonable fluency when you arrive at our next class meeting. Important new vocabulary words are indicated in italics .    Understand how a two-dimensional system defines a vector field in the plane by assigning the vector to each point .    Identify equilibrium points as solutions of and recognize that the origin is typically the unique equilibrium in a homogeneous linear system.    Describe how eigenvalues and eigenvectors of determine basic trajectory directions and qualitative motion in the phase plane .      Learn!  Complete the actions listed below.     Read  Section 7.5: Two-dimensional systems and their vector fields .     Watch  Types of Behavior of 2D Linear Homogeneous Const Coefficient Systems of ODEs Using Eigenvalues (7:55) by Mathispower4u.    (Optional) Watch  Describe the Behavior of 2D Lin Homogeneous Const Coefficient Systems of ODEs: Eigenvalues (5:12) by Mathispower4u.     Do  Subsection 7.5.1: Exercises 7.5.1, 7.5.2, 7.5.101, 7.5.102 .      Do MyOpenMath questions from this section.     Exercises   Understanding the Vector Field   For a two-dimensional linear system , what does the vector field in the phase plane represent?      At each point , the vector field assigns the direction vector .    Correct. The flow direction at each point in the plane is given by .      It assigns the length at each point.    No. Vector fields assign direction vectors, not lengths.      It assigns the scalar to every point.    No. The determinant plays a role in stability, not in defining the field.       Identifying the Equilibrium Point   For the homogeneous linear system , what is the equilibrium point?         Correct. In a homogeneous system, the equilibrium is the solution to , which is typically only the origin.      , where is any eigenvector.    No. Eigenvectors describe trajectory directions, not equilibria.      Every point in the plane is an equilibrium.    No. That occurs only in the trivial zero matrix system.       Classifying the Equilibrium   Consider the system where How is the equilibrium at the origin classified?      An unstable node.    Correct. Both eigenvalues and are positive real numbers, so solutions grow away from the origin along eigenvector directions, forming an unstable node.     A saddle point.   No. A saddle requires one positive and one negative eigenvalue.     A center.   No. Centers require purely imaginary eigenvalues.       Choose the Correct Phase Plane   Consider the system Which of the following phase portraits corresponds to this system?      (A) Unstable node    Phase portrait (A): Trajectories flow out along eigen-directions.     Correct. Both eigenvalues are positive ( and ) so the origin is an unstable node ; trajectories move outward along the eigenvector directions (the coordinate axes).      (B) Saddle    Phase portrait (B): Saddle structure (in\/out along different axes).     Not this one. A saddle requires eigenvalues of opposite signs, which is not the case here.      (C) Center    Phase portrait (C): Closed orbits (center).     Not this one. Centers correspond to purely imaginary eigenvalues (no real part), whereas both eigenvalues here are positive and real.        Describing the Vector Field and Trajectory Behavior   Consider the two-dimensional linear system (a) Describe the vector field in the phase plane, including how the direction vectors behave at various points. (b) Classify the equilibrium at the origin and explain the qualitative behavior of trajectories as .     (a) The vector field assigns to each point the direction vector . Because each component is a negative multiple of the coordinate, arrows everywhere in the plane point toward the origin. Along the -axis, the flow is horizontal toward the origin at a rate proportional to . Along the -axis, the flow is vertical toward the origin but at a faster rate proportional to . Off the axes, arrows point diagonally inward, with the -component shrinking more quickly due to the larger magnitude eigenvalue. This interpretation follows the definition of the vector field as assigning to each point.   (b) The eigenvalues of are and , both negative. According to the classification in Section 7.5, a system with two negative real eigenvalues has a stable node at the origin. Hence all trajectories approach the origin as . Because has larger magnitude, the -component decays faster, so trajectories tilt toward the -axis as they approach the origin. This is consistent with the node behavior described in the section.      Classifying a System Using Eigenvalues and Eigenvectors   Consider the system (a) Compute the eigenvalues and classify the equilibrium at the origin. (b) Based on the eigenvalues and eigenvectors, describe qualitatively what the phase portrait looks like (e.g., rotation, spiraling, or approach\/escape behavior).     (a) The characteristic equation is Therefore the eigenvalues are , a pair of purely imaginary conjugates. Purely imaginary eigenvalues correspond to a center at the origin.   (b) With purely imaginary eigenvalues, solutions neither grow nor decay in magnitude. Instead, they rotate in closed or nearly closed orbits around the origin. The vector field shows arrows tangent to ellipses or circles, depending on the eigenvector geometry. In this case, the system behaves like a constant‑speed rotation, so the phase portrait consists of closed curves (center behavior). Such systems have trajectories that circle the equilibrium rather than approaching or diverging from it.       Advanced learning objectives  In addition to mastering the basic objectives, here are the tasks you should be able to perform, with practice:    Classify the behavior of the equilibrium point (node, saddle, spiral, or center) using the signs and types of eigenvalues of .    Explain how eigenvectors generate principal solution curves and how all other trajectories are organized around these directions in two-dimensional linear systems.    Relate the qualitative structure of the vector field to the general solution for distinct eigenvalues, including how the relative growth rates affect long-term behavior.     "
},
{
  "id": "mcq2dvectorfielddefinition",
  "level": "2",
  "url": "ch-Textbook-3.html#mcq2dvectorfielddefinition",
  "type": "Exercise",
  "number": "1",
  "title": "Understanding the Vector Field.",
  "body": " Understanding the Vector Field   For a two-dimensional linear system , what does the vector field in the phase plane represent?      At each point , the vector field assigns the direction vector .    Correct. The flow direction at each point in the plane is given by .      It assigns the length at each point.    No. Vector fields assign direction vectors, not lengths.      It assigns the scalar to every point.    No. The determinant plays a role in stability, not in defining the field.     "
},
{
  "id": "mcq2dequilibrium",
  "level": "2",
  "url": "ch-Textbook-3.html#mcq2dequilibrium",
  "type": "Exercise",
  "number": "2",
  "title": "Identifying the Equilibrium Point.",
  "body": " Identifying the Equilibrium Point   For the homogeneous linear system , what is the equilibrium point?         Correct. In a homogeneous system, the equilibrium is the solution to , which is typically only the origin.      , where is any eigenvector.    No. Eigenvectors describe trajectory directions, not equilibria.      Every point in the plane is an equilibrium.    No. That occurs only in the trivial zero matrix system.     "
},
{
  "id": "mcq2dclassificationeigenvalues",
  "level": "2",
  "url": "ch-Textbook-3.html#mcq2dclassificationeigenvalues",
  "type": "Exercise",
  "number": "3",
  "title": "Classifying the Equilibrium.",
  "body": " Classifying the Equilibrium   Consider the system where How is the equilibrium at the origin classified?      An unstable node.    Correct. Both eigenvalues and are positive real numbers, so solutions grow away from the origin along eigenvector directions, forming an unstable node.     A saddle point.   No. A saddle requires one positive and one negative eigenvalue.     A center.   No. Centers require purely imaginary eigenvalues.     "
},
{
  "id": "mcq-phase-plane-images",
  "level": "2",
  "url": "ch-Textbook-3.html#mcq-phase-plane-images",
  "type": "Exercise",
  "number": "4",
  "title": "Choose the Correct Phase Plane.",
  "body": " Choose the Correct Phase Plane   Consider the system Which of the following phase portraits corresponds to this system?      (A) Unstable node    Phase portrait (A): Trajectories flow out along eigen-directions.     Correct. Both eigenvalues are positive ( and ) so the origin is an unstable node ; trajectories move outward along the eigenvector directions (the coordinate axes).      (B) Saddle    Phase portrait (B): Saddle structure (in\/out along different axes).     Not this one. A saddle requires eigenvalues of opposite signs, which is not the case here.      (C) Center    Phase portrait (C): Closed orbits (center).     Not this one. Centers correspond to purely imaginary eigenvalues (no real part), whereas both eigenvalues here are positive and real.     "
},
{
  "id": "twodim-open-1",
  "level": "2",
  "url": "ch-Textbook-3.html#twodim-open-1",
  "type": "Exercise",
  "number": "5",
  "title": "Describing the Vector Field and Trajectory Behavior.",
  "body": " Describing the Vector Field and Trajectory Behavior   Consider the two-dimensional linear system (a) Describe the vector field in the phase plane, including how the direction vectors behave at various points. (b) Classify the equilibrium at the origin and explain the qualitative behavior of trajectories as .     (a) The vector field assigns to each point the direction vector . Because each component is a negative multiple of the coordinate, arrows everywhere in the plane point toward the origin. Along the -axis, the flow is horizontal toward the origin at a rate proportional to . Along the -axis, the flow is vertical toward the origin but at a faster rate proportional to . Off the axes, arrows point diagonally inward, with the -component shrinking more quickly due to the larger magnitude eigenvalue. This interpretation follows the definition of the vector field as assigning to each point.   (b) The eigenvalues of are and , both negative. According to the classification in Section 7.5, a system with two negative real eigenvalues has a stable node at the origin. Hence all trajectories approach the origin as . Because has larger magnitude, the -component decays faster, so trajectories tilt toward the -axis as they approach the origin. This is consistent with the node behavior described in the section.   "
},
{
  "id": "twodim-open-2",
  "level": "2",
  "url": "ch-Textbook-3.html#twodim-open-2",
  "type": "Exercise",
  "number": "6",
  "title": "Classifying a System Using Eigenvalues and Eigenvectors.",
  "body": " Classifying a System Using Eigenvalues and Eigenvectors   Consider the system (a) Compute the eigenvalues and classify the equilibrium at the origin. (b) Based on the eigenvalues and eigenvectors, describe qualitatively what the phase portrait looks like (e.g., rotation, spiraling, or approach\/escape behavior).     (a) The characteristic equation is Therefore the eigenvalues are , a pair of purely imaginary conjugates. Purely imaginary eigenvalues correspond to a center at the origin.   (b) With purely imaginary eigenvalues, solutions neither grow nor decay in magnitude. Instead, they rotate in closed or nearly closed orbits around the origin. The vector field shows arrows tangent to ellipses or circles, depending on the eigenvector geometry. In this case, the system behaves like a constant‑speed rotation, so the phase portrait consists of closed curves (center behavior). Such systems have trajectories that circle the equilibrium rather than approaching or diverging from it.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
